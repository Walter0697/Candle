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
    hasWord,
    hasSameWord,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    // using top, left and right colour to replace this color representation
    // const backgroundColor = useMemo(() => {
    //     return colour.getColourData(status, isContrast)
    // }, [status, isContrast])

    const partSeparate = useMemo(() => {
        if (!status) return false
        if (status !== 'yyy') return false
        if (hasWord || hasSameWord) return false
        return true
    }, [status, hasWord, hasSameWord])

    const topColor = useMemo(() => {
        return colour.getSingleColourData(status, 'top', isContrast)
    }, [status, isContrast])

    const leftColor = useMemo(() => {
        return colour.getSingleColourData(status, 'left', isContrast)
    }, [status, isContrast])

    const rightColor = useMemo(() => {
        return colour.getSingleColourData(status, 'right', isContrast)
    }, [status, isContrast])

    const incorrectColour = useMemo(() => {
        return colour.getIncorrectColour(isContrast)
    }, [isContrast])
    
    const { transform } = useSpring({
        config: config.slow,
        from: { transform: 'rotateY(0deg)' },
        to: { transform: ( status && status !== 'inactive' ) ? 'rotateY(180deg)' : 'rotateY(0deg)' },
    })

    const dimension = useMemo(() => {
        if (!status) return '32px'
        if (status === 'ggg' && !sameWord) return '30px'
        if (status === 'yyy' && !hasSameWord && hasWord) return '30px'
        return '32px'
    }, [status, hasSameWord, hasWord])

    const backborderColor = useMemo(() => {
        if (!status) return ''
        if (status === 'ggg' && !sameWord) return `1px solid ${colour.getNonSameWordColour(isContrast)}`
        if (status === 'yyy' && !hasSameWord && hasWord) return `1px solid ${colour.getNonSameWordColour(isContrast)}`
        return ''
    }, [status, sameWord, isContrast, hasSameWord, hasWord])
    
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
                        //background: backgroundColor,
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
                        {word ? <>{word}</> : <>&nbsp;</>}
                    </div>
                    
                </div>
                <div className={'tutorialbox-pronounce flipbox-pronounce-display'}>
                    {pronounce ? <>
                        <span
                            style={{ color: leftColor === incorrectColour ? 'white' : leftColor }}
                        >
                            {pronounce.initial}
                        </span>
                        <span 
                            style={{ color: rightColor === incorrectColour ? 'white' : rightColor }}
                        >
                            {pronounce.final}
                        </span>
                        <span 
                            style={{ color: topColor === incorrectColour ? 'white' : topColor }}
                        >
                            {pronounce.tone}
                        </span>
                    </> : <>&nbsp;</>}
                </div>
            </div>
        </animated.div>
    )
}

export default TutorialTile