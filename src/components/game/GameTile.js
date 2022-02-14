import React, { useMemo, useState, useEffect } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'

function GameTile({ 
    info,
}) {
    const [ pop, setPop ] = useState(false)

    useEffect(() => {
        let timer = null
        if (info && info.word && info.status === 'inactive') {
            setPop(true)
            timer = window.setTimeout(() => {
                setPop(false)
            }, 100)
        }

        return () => timer && window.clearTimeout(timer)
    }, [info])

    const colorClass = useMemo(() => {
        if (!info) return ''
        if (!info.status) return ''
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
            boxScale: ( pop ) ? 'scale(1.2, 1.2)' : 'scale(1, 1)',
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
                <div
                    className={`flipbox back-flipbox ${colorClass}`}
                >
                    {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
                </div>
                <div className={'flipbox-pronounce flipbox-pronounce-display'}>
                    {(info && info.pronounce) ? <>{info.pronounce}</> : <>&nbsp;</>}
                </div>
            </div> 
        </animated.div>
    )
}

export default GameTile