import React, { useMemo } from 'react'
import {
    useSpring,
    config,
    animated,
} from '@react-spring/web'
import { useSelector } from 'react-redux'

import colour from '../../utils/colour'

function TutorialTile({
    word,
    status,
    pronounce,
    sameWord,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const backgroundColor = useMemo(() => {
        return colour.getColourData(status, isContrast)
    }, [status, isContrast])

    const { transform } = useSpring({
        config: config.slow,
        from: { transform: 'rotateY(0deg)' },
        to: { transform: ( status && status !== 'inactive' ) ? 'rotateY(180deg)' : 'rotateY(0deg)' },
    })

    const dimension = useMemo(() => {
        if (!status) return '32px'
        if (status === 'ggg' && !sameWord) return '30px'
        return '32px'
    }, [status, sameWord])

    const backborderColor = useMemo(() => {
        if (!status) return ''
        if (status === 'ggg' && !sameWord) return `1px solid ${colour.getNonSameWordColour(isContrast)}`
        return ''
    }, [status, sameWord, isContrast])
    
    return (
        <animated.div
            className={'tutorialbox-wrap notpaste'}
            style={{
                transform: transform,
            }}
        >
            <div
                className={'flippable'}
            >
                <div
                    className={'templatebox front-templatebox'}
                >
                    {word ? <>{word}</> : <>&nbsp;</>}
                </div>
                <div className={'flipbox-pronounce'} />
            </div>
            <div
                className={'back-flippable'}
            >
                <div
                    // className={'templatebox back-templatebox'}
                    className={'templatebox'}
                    style={{
                        background: backgroundColor,
                        border: backborderColor,
                        height: dimension,
                        width: dimension,
                    }}
                >
                    {word ? <>{word}</> : <>&nbsp;</>}
                </div>
                <div className={'tutorialbox-pronounce flipbox-pronounce-display'}>
                    {pronounce ? <>{pronounce}</> : <>&nbsp;</>}
                </div>
            </div>
        </animated.div>
    )
}

export default TutorialTile