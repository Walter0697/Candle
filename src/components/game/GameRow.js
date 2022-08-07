import React, { useEffect, useMemo, useCallback } from 'react'
import {
    useSpring,
    animated
} from '@react-spring/web'

import GameTile from './GameTile'

import { useSelector } from 'react-redux'

import validate from '../../utils/validate'
import config from '../../utils/configuration'

function GameRow({ 
    list,
    activeRow,
    shake,
    setShake,
    currentDate,
    shouldGiveHint,
    rowNumber,
}) {
    const hintStartRow = config.hintStartRow

    const difficulty = useSelector((state) => state.setting.difficulty)

    const firstWordHint = useMemo(() => {
        if (difficulty !== 'easy') return false
        if (!shouldGiveHint) {
            if (rowNumber >= hintStartRow) {
                return '?'
            }
            return false
        }
        const word = validate.first(currentDate)
        return word
    }, [shouldGiveHint, difficulty, currentDate])

    const initialHint = useMemo(() => {
        if (difficulty !== 'middle') return false
        if (!shouldGiveHint) {
            if (rowNumber >= hintStartRow) {
                return '?'
            }
            return false
        }
        const initials = validate.allInitial(currentDate)
        return initials
    }, [shouldGiveHint, difficulty, currentDate])

    const getInitial = useCallback((index) => {
        if (!initialHint) return false
        if (rowNumber >= hintStartRow) {
            return '?'
        }
        return initialHint[index] 
    }, [initialHint])

    useEffect(() => {
        let timer = null
        if (shake) {
            timer = window.setTimeout(() => {
                setShake(false)
            }, 100) 
        }
        return () => timer && window.clearTimeout(timer)
    }, [ shake, setShake ])

    const getInfo = (index) => {
        if (list.length > index) return list[index]
        return null
    }

    const { x } = useSpring({
        from: { x: 0 },
        to: { x: activeRow && shake ? 1 : 0 },
    })

    return (
        <animated.div
            style={{
                display: 'block',
                transform: x
                    .to({
                        range: [0, 0.25, 0.5, 0.75, 1],
                        output: [0, 10, -10, 10, 0],
                    })
                    .to(x => `translate(${x}px, 0px)`)
            }}
        >
            <GameTile info={getInfo(0)} wordHint={firstWordHint} initialHint={getInitial(0)}/>
            <GameTile info={getInfo(1)} initialHint={getInitial(1)}/>
            <GameTile info={getInfo(2)} initialHint={getInitial(2)}/>
            <GameTile info={getInfo(3)} initialHint={getInitial(3)}/>
        </animated.div>
    )
}

export default GameRow