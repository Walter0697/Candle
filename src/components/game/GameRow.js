import React, { useEffect } from 'react'
import {
    useSpring,
    animated
} from '@react-spring/web'

import GameTile from './GameTile'

function GameRow({ 
    list,
    activeRow,
    shake,
    setShake,
}) {
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
            <GameTile info={getInfo(0)} />
            <GameTile info={getInfo(1)} />
            <GameTile info={getInfo(2)} />
            <GameTile info={getInfo(3)} />
        </animated.div>
    )
}

export default GameRow