import React, { useState, useMemo } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'

import color from '../../utils/color'

function GameTile({ 
    info,
}) {
    const backgroundColor = useMemo(() => {
        if (!info) return color.inactive
        if (!info.status) return color.inactive
        return color[info.status]
    }, [info])

    const { transform } = useSpring({
        config: config.slow,
        from: { transform: 'rotateY(0deg)' },
        to: { transform: ( info && info.status && info.status !== 'inactive' ) ? 'rotateY(180deg)' : 'rotateY(0deg)' },
    })

    return (
        
        <animated.div 
            className={'flipbox-wrap'}
            style={{
                transform: transform,
            }}
        >
            <div
                className={'flippable flipbox front-flipbox'}
                style={{
                    backgroundColor: color.inactive,
                }}
            >
                {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
            </div> 
            <div
                className={'flippable flipbox back-flipbox'}
                style={{
                    border: `2px solid ${backgroundColor}`,
                    backgroundColor: backgroundColor,
                }}
            >
                {(info && info.word) ? <>{info.word}</> : <>&nbsp;</>}
            </div> 
        </animated.div>
    )
}

export default GameTile