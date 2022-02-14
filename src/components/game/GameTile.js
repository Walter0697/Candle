import React, { useMemo, useState, useEffect } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'

import rand from '../../utils/rand'

function GameTile({ 
    info,
}) {
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

    const colorClass = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
        if (info.status === 'win') return 'color-correct'
        return `color-${info.status}`
    }, [info])

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
                    }}
                >
                    {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
                </animated.div>
                <div className={'flipbox-pronounce'} />
            </div> 
            <div
                className={'back-flippable'}
            >
                <animated.div
                    className={`flipbox back-flipbox ${colorClass}`}
                    style={{
                        transform: celebrateWin,
                    }}
                >
                    {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
                </animated.div>
                <div className={'flipbox-pronounce flipbox-pronounce-display'}>
                    {(info && info.pronounce) ? <>{info.pronounce}</> : <>&nbsp;</>}
                </div>
            </div> 
        </animated.div>
    )
}

export default GameTile