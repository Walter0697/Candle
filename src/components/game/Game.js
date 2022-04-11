import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react'
import {
    Grid, 
} from '@mui/material'

import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'

import GameRow from './GameRow'
import InputBox from './InputBox'
import NormalInput from './NormalInput'

import validate from '../../utils/validate'
import record from '../../utils/record'
import notification from '../../utils/notification'
import config from '../../utils/configuration'

const maxLength = config.maxLength
const maxRow = config.maxRow
const rowHeight = config.rowHeight

const wordListReducer = (state, action) => {
    switch(action.type) {
        case 'add': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            currentRowList.push({ word: action.word, status: 'inactive', pronounce: '', sameWord: false })
            return list
        }
        case 'addmulti': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            for (let i = 0; i < action.words.length; i++) {
                currentRowList.push({ word: action.words[i], status: 'inactive', pronounce: '', sameWord: false })
            }
            return list
        }
        case 'remove': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            currentRowList.pop()
            return list
        }
        case 'checked': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            const word = currentRowList[action.index].word
            currentRowList[action.index] = { word: word, status: action.status, pronounce: action.pronounce, sameWord: action.sameWord }
            return list
        }
        case 'win': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            const word = currentRowList[action.index].word
            const pronounce = currentRowList[action.index].pronounce
            currentRowList[action.index] = { word: word, pronounce: pronounce, status: 'win' }
            return list
        }
        case 'set': {
            return action.data
        }
        case 'refresh': {
            const list = Object.assign([], state)
            return list
        }
        default:
            return state
    }
}

function Game({ 
    date,
    setFinished,
}) {
    const { enqueueSnackbar } = useSnackbar()
    const autoScroll = useSelector((state) => state.setting.autoScroll)
    const smoothInput = useSelector((state) => state.setting.smoothInput) 

    const scrollableDiv = useRef(null)

    const currentRow = useRef(0)
    const winningRow = useRef(0)
    const currentGuess = useRef(0)
    const validating = useRef(false)
    const gameStatus = useRef('')    // win / loss
    const [ wordList, manipulateList ] = useReducer(wordListReducer, JSON.parse(JSON.stringify(Array(maxRow).fill([]))) )

    const [ rowShake, setRowShake ] = useState(false)

    const canInput = useMemo(() => {
        if (validating.current) return false
        if (gameStatus.current === 'win' || gameStatus.current === 'loss') return false
        return true
    }, [validating.current, gameStatus.current])

    useEffect(() => {
        if (date) {
            if (record.is_today(date)) {
                // only load record when today progress is being recorded            
                const savedProgress = record.load()
                if (savedProgress) {
                    let row = 0
                    for (let i = 0; i < savedProgress.length; i++) {
                        if (savedProgress[i].length === 0) {
                            row = i
                            break
                        }
                    }
    
                    manipulateList({ type: 'set', data: savedProgress })
                    currentRow.current = row
    
                    const savedStatus = record.status(date)
                    if (savedStatus) {
                        gameStatus.current = savedStatus
                        setFinished()
                    } else {
                        gameStatus.current = ''
                    }
    
                    if (savedStatus === 'win') {
                        winningRow.current = row - 1
                    }
                }
            } else {
                record.reset_status()
            }
        }
    }, [date])

    useEffect(() => {
        if (!validating.current) {
            if (gameStatus.current === 'win') {
                scrollableDiv.current.scrollTo({ top:0, behavior:'smooth' })
                // // winning animation
                setWinAnimation(0)
            }
            else if (gameStatus.current === 'loss') {
                scrollableDiv.current.scrollTo({ top:0, behavior:'smooth' })
                enqueueSnackbar(validate.correct(date), { autoHideDuration: 1000 })
                window.setTimeout(() => {
                    setFinished()
                }, 1000)
            }
        }
    }, [validating.current, gameStatus.current])

    const guess = () => {
        // if the game is finished, then don't do anything
        if (gameStatus.current !== '') return

        const currentRowList = wordList[currentRow.current]
        if (currentRowList.length !== maxLength) {
            enqueueSnackbar(notification.fourWord(date), { autoHideDuration: 1000 })
            setRowShake(true)
            return
        }

        let guessing = ''
        for (let i = 0; i < currentRowList.length; i++) {
            guessing += currentRowList[i].word
        }

        // check if it exists in word list
        const exist = validate.exist(guessing)
        if (!exist) {
            enqueueSnackbar(notification.notInWordList(), { autoHideDuration: 1000 })
            setRowShake(true)
            return
        }

        // start checking the vocabs
        validating.current = true

        const result = validate.guess(guessing, date)
        const respond = JSON.parse(JSON.stringify(result))
        if (respond.win) {
            gameStatus.current = 'win'
            const parsedList = record.parse(wordList, currentRow.current, respond.result)
            
            // save the winning record
            winningRow.current = currentRow.current
            record.win(date, currentRow.current + 1)
            record.save(parsedList, date)
            setWordStatus(0, respond.result)
        } else {
            const parsedList = record.parse(wordList, currentRow.current, respond.result)

            if (currentRow.current === maxRow - 1) {
                record.loss(date, currentRow.current + 1)
                gameStatus.current = 'loss'
            }
            record.save(parsedList, date)
            setWordStatus(0, respond.result)
        }
    }

    const finishedChecking = () => {
        if (currentRow.current === maxRow - 1) {
            validating.current = false
            manipulateList({type: 'refresh'})
            return
        }
        currentRow.current += 1
        currentGuess.current = 0
        validating.current = false
        const targetScroll = (currentRow.current - 2) * rowHeight
        if (autoScroll) {
            scrollableDiv.current.scrollTo({ top:targetScroll, behavior:'smooth' })
        }
        manipulateList({type: 'refresh'})
    }

    const setWordStatus = (index, resultList) => {
        if (resultList.length === 0) {
            finishedChecking()
            return
        }

        const first = resultList.shift()
        manipulateList({
            type: 'checked',
            row: currentRow.current,
            index: index,
            status: first.status,
            pronounce: first.pronounce,
            sameWord: first.sameWord,
        })
        window.setTimeout(() => {
            setWordStatus(index + 1, resultList)
        }, 500)
    }

    const setWinAnimation = (index) => {
        if (index === maxLength) {
            setFinished()
            return
        }

        manipulateList({
            type: 'win',
            row: winningRow.current,
            index: index,
        })
        window.setTimeout(() => {
            setWinAnimation(index + 1)
        }, 500)
    }
    
    const setNextGuess = (data) => {
        let inserted = false

        let currentLength = wordList[currentRow.current].length
        const remainingSpace = 4 - currentLength

        let loopingIndex = remainingSpace
        if (data.length <= remainingSpace) {
            loopingIndex = data.length
        } else {
            enqueueSnackbar(notification.multipleWord(), { autoHideDuration: 1000 })
        }

        let toadd = []
        for (let i = 0; i < loopingIndex; i++) {
            toadd.push(data.charAt(i))
            inserted = true
        }

        manipulateList({type: 'addmulti', words: toadd, row: currentRow.current })
        currentGuess.current += loopingIndex
        return inserted
    }

    const clearPreviousGuess = () => {
        const prevLength = wordList[currentRow.current].length
        if (prevLength !== 0) {
            manipulateList({type: 'remove', row: currentRow.current })
            currentGuess.current = prevLength - 1
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}
                className='game-container'
            >
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {smoothInput ? (
                            <InputBox 
                                setValue={setNextGuess}
                                clearPrevious={clearPreviousGuess}
                                currentIndex={wordList[currentRow.current].length}
                                canInput={canInput}
                                validating={validating.current}
                                guess={guess}
                            />
                        ) : (
                            <NormalInput 
                                setValue={setNextGuess}
                                clearPrevious={clearPreviousGuess}
                                currentIndex={wordList[currentRow.current].length}
                                canInput={canInput}
                                validating={validating.current}
                                guess={guess}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container
                            ref={scrollableDiv}
                            style={{
                                height: '85vh',
                                overflow: 'auto',
                            }}
                        >
                            {wordList.map((data, index) => (
                                <Grid item xs={12} md={12} lg={12}
                                    key={index}
                                    className='game-row'
                                >
                                    <GameRow 
                                        list={data}
                                        isFinished={currentRow.current > index}
                                        activeRow={currentRow.current === index}
                                        shake={rowShake}
                                        setShake={setRowShake}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs={12} md={12} lg={12}
                                style={{
                                    height: '50vh',
                                    width: '100%',
                                }}
                            >
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>    
    )
}

export default Game