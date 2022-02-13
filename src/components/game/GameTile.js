import React, { useMemo } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'

function GameTile({ 
    info,
}) {
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
                <div
                    className={'flipbox front-flipbox'}
                >
                    {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
                </div>
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