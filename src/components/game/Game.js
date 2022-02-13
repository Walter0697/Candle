import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react'
import {
    Grid, 
} from '@mui/material'

import { useSnackbar } from 'notistack'

import GameRow from './GameRow'
import InputBox from './InputBox'

import validate from '../../utils/validate'
import constant from '../../utils/constant'
import record from '../../utils/record'
import notification from '../../utils/notification'

const maxLength = 4
const maxRow = 6

const wordListReducer = (state, action) => {
    switch(action.type) {
        case 'add': {
            const list = Object.assign([], state)
            const currentRowList = list[action.row]
            currentRowList.push({ word: action.word, status: 'inactive' })
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
            currentRowList[action.index] = { word: word, status: action.status }
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

    const currentRow = useRef(0)
    const currentGuess = useRef(0)
    const validating = useRef(false)
    const gameStatus = useRef('')    // win / loss
    const [ wordList, manipulateList ] = useReducer(wordListReducer, [
        [], [], [], [], [], [],
    ])

    const [ rowShake, setRowShake ] = useState(false)

    const canInput = useMemo(() => {
        if (validating.current) return false
        if (gameStatus.current === 'win' || gameStatus.current === 'loss') return false
        return true
    }, [validating.current, gameStatus.current])

    useEffect(() => {
        if (record.is_today(date)) {
            // only load record when today progress is being recorded
            const savedStatus = record.status(date)
            if (savedStatus) {
                gameStatus.current = savedStatus
                setFinished()
            } else {
                gameStatus.current = ''
            }
            
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
            }
        }
    }, [date])

    useEffect(() => {
        if (!validating.current) {
            if (gameStatus.current === 'win' || gameStatus.current === 'loss') {
                setFinished()
            }
        }
    }, [validating.current, gameStatus.current])

    const guess = () => {
        // if the game is finished, then don't do anything
        if (gameStatus.current !== '') return

        const currentRowList = wordList[currentRow.current]
        if (currentRowList.length !== maxLength) {
            enqueueSnackbar(notification.fourWord(), { autoHideDuration: 1000 })
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

        const respond = validate.guess(guessing)
        if (respond.win) {
            gameStatus.current = 'win'
            const result = [constant.correct, constant.correct, constant.correct, constant.correct]
            const parsedList = record.parse(wordList, currentRow.current, result)
            
            // save the winning record
            record.win(date, currentRow.current + 1)
            record.save(parsedList, date)
            setWordStatus(0, result)
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
            status: first,
        })
        window.setTimeout(() => {
            setWordStatus(index + 1, resultList)
        }, 500)
    }
    
    const setNextGuess = (data) => {
        if (data.trim() === '') {
            enqueueSnackbar(notification.emptyWord(), { autoHideDuration: 1000 })
            return
        } else if (data.length > 1) {
            enqueueSnackbar(notification.multipleWord(), { autoHideDuration: 1000 })
            return
        }
        const prevLength = wordList[currentRow.current].length
        manipulateList({type: 'add', word: data, row: currentRow.current })
        currentGuess.current = prevLength + 1
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
                        <InputBox 
                            setValue={setNextGuess}
                            clearPrevious={clearPreviousGuess}
                            currentIndex={wordList[currentRow.current].length}
                            canInput={canInput}
                            validating={validating.current}
                            guess={guess}
                        />
                    </Grid>
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
                </Grid>
            </Grid>
        </Grid>    
    )
}

export default Game