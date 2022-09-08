import React, { useMemo, useState, useEffect } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'
import { useSelector } from 'react-redux'

import rand from '../../utils/rand'
import colour from '../../utils/colour'

function GameTile({ 
    info,
    wordHint,
    initialHint,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const [ pop, setPop ] = useState(false)
    const [ celebrate, setCelebrate ] = useState(false)

    useEffect(() => {
        let timer = null
        if (info && info.word && info.status === 'inactive') {
            setPop(true)
            timer = window.setTimeout(() => {
                setPop(false)
            }, 100)
        }

        if (info && info.status && info.status === 'win') {
            setCelebrate(true)
            timer = window.setTimeout(() => {
                setCelebrate(false)
            }, 300)
        }

        return () => timer && window.clearTimeout(timer)
    }, [info])

    // using top, left and right colour to replace this color representation
    // const backgroundColor = useMemo(() => {
    //     if (!info) return ''
    //     if (!info.status) return ''
    //     const currentStatus = info.status === 'win' ? 'ggg' : info.status
    //     return colour.getColourData(currentStatus, isContrast)
    // }, [info, isContrast])

    const displayWord = useMemo(() => {
        if (info && info.word) return info.word
        if (wordHint) return wordHint
        return ''
    }, [info, wordHint])

    const partSeparate = useMemo(() => {
        if (!info) return false
        if (!info.status) return false
        if (info.shouldSplit) return true
        if (info.status !== 'yyy') return false
        if (info.hasWord || info.hasSameWord) return false
        return true
    }, [info])

    const wordColor = useMemo(() => {
        if (info && info.word) return 'white'
        return 'gray'
    }, [info, wordHint])

    const topColor = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
        const currentStatus = info.status === 'win' ? 'ggg' : info.status
        return colour.getSingleColourData(currentStatus, 'top', isContrast)
    }, [info, isContrast])

    const leftColor = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
        const currentStatus = info.status === 'win' ? 'ggg' : info.status
        return colour.getSingleColourData(currentStatus, 'left', isContrast)
    }, [info, isContrast])

    const rightColor = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
        const currentStatus = info.status === 'win' ? 'ggg' : info.status
        return colour.getSingleColourData(currentStatus, 'right', isContrast)
    }, [info, isContrast])

    const incorrectColour = useMemo(() => {
        return colour.getIncorrectColour(isContrast)
    }, [isContrast])

    const dimension = useMemo(() => {
        if (!info) return '54px'
        if (!info.status) return ''
        if (info.status === 'ggg' && !info.sameWord) return '50px'
        if (info.status === 'yyy' && !info.hasSameWord && info.hasWord) return '50px'
        return '54px'
    }, [info])

    const backborderColor = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
        if (info.status === 'ggg' && !info.sameWord) return `2px solid ${colour.getNonSameWordColour(isContrast)}`
        if (info.status === 'yyy' && !info.hasSameWord && info.hasWord) return `2px solid ${colour.getNonSameWordColour(isContrast)}`
        return ''
    }, [info, isContrast])

    const { transform } = useSpring({
        config: config.slow,
        from: { transform: 'rotateY(0deg)' },
        to: { transform: ( info && info.status && info.status !== 'inactive' ) ? 'rotateY(180deg)' : 'rotateY(0deg)' },
    })

    const { borderColor, boxScale } = useSpring({
        config: config.wobbly,
        from: { borderColor: '2px solid #565758', boxScale: 'scale(1, 1) '},
        to: { 
            borderColor: ( info && info.word ) ? '2px solid #9b9b9b' : '2px solid #565758',
            boxScale: ( pop ) ? 'scale(1.05, 1.05)' : 'scale(1, 1)',
        }
    })

    const { celebrateWin } = useSpring({
        config: config.gentle,
        from: { celebrateWin: 'translate(0px, 0px)' },
        to: {
            celebrateWin: ( celebrate ) ? `translate(0px, -${rand.randomInt(20) + 10}px)` : 'translate(0px, 0px)',
        }
    })

    return (
        
        <animated.div 
            className={'flipbox-wrap notpaste'}
            style={{
                transform: transform,
            }}
        >
            <div
                className={'flippable'}
            >
                <animated.div
                    className={'flipbox front-flipbox'}
                    style={{
                        border: borderColor,
                        transform: boxScale,
                        color: wordColor,
                    }}
                >
                    {(displayWord) ? <>{displayWord}</> : <>&nbsp;</>}
                </animated.div>
                <div className={'flipbox-pronounce flipbox-pronounce-hint'}>{initialHint}</div>
            </div> 
            <div
                className={'back-flippable'}
            >
                <animated.div
                    // className={'flipbox back-flipbox'}
                    className={'flipbox'}
                    style={{
                        //background: backgroundColor,
                        transform: celebrateWin,
                        border: backborderColor,
                        height: dimension,
                        width: dimension,
                    }}
                >
                    {partSeparate ? (
                        <>
                            <div className={'septopbox'}
                                style={{
                                    backgroundColor: topColor,
                                }}
                            />
                            <div
                                className={'sepleftbox'}
                                style={{
                                    backgroundColor: leftColor,
                                }}
                            />
                            <div
                                className={'seprightbox'}
                                style={{
                                    backgroundColor: rightColor,
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <div
                                className={'topbox'}
                                style={{
                                    backgroundColor: topColor,
                                }}
                            />
                            <div
                                className={'leftbox'}
                                style={{
                                    backgroundColor: leftColor,
                                }}
                            />
                            <div
                                className={'rightbox'}
                                style={{
                                    backgroundColor: rightColor,
                                }}
                            />
                        </>
                    )}
                    
                    <div className={'textbox'}>
                        {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
                    </div>
                </animated.div>
                <div className={'flipbox-pronounce flipbox-pronounce-display'}>
                    {(info && info.pronounce) ? <>
                        <span
                            style={{ 
                                color: leftColor === incorrectColour ? 'white' : leftColor,
                                borderBottom: `solid 1px ${leftColor === incorrectColour ? 'white' : leftColor}`
                            }}
                        >
                            {info.pronounce.initial}
                        </span>
                        <span 
                            style={{ color: rightColor === incorrectColour ? 'white' : rightColor }}
                        >
                            {info.pronounce.final}
                        </span>
                        <span 
                            style={{ color: topColor === incorrectColour ? 'white' : topColor }}
                        >
                            {info.pronounce.tone}
                        </span>
                    </> : <>&nbsp;</>}
                </div>
            </div> 
        </animated.div>
    )
}

export default GameTile