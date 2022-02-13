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
                className={'flippable flipbox front-flipbox'}
            >
                {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
            </div> 
            <div
                className={`flippable flipbox back-flipbox ${colorClass}`}
                style={{
                    //border: `2px solid ${backgroundColor}`,
                    //backgroundColor: backgroundColor,
                }}
            >
                {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
            </div> 
        </animated.div>
    )
}

export default GameTile