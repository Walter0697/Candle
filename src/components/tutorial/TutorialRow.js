import React, { useEffect, useState, useMemo } from 'react'

import TutorialTile from './TutorialTile'

import rand from '../../utils/rand'

function TutorialRow({
    words,
    pronounces,
    sampleStatus,
    sameWord,
    explain,
}) {
    const [ targetPosition, setTarget ] = useState(-1)
    const text = useMemo(() => {
        const word = targetPosition === -1 ? '' : words.charAt(targetPosition)
        return explain.replace('{target}', word)
    }, [explain, targetPosition, words])

    useEffect(() => {
        window.setTimeout(() => {
            setTarget(rand.randomInt(3))
        }, 200)
    }, [])

    return (
        <>
            <div
                style={{
                    display: 'block',
                    marginBottom: '10px',
                }}
            >
                <TutorialTile word={words.charAt(0)} pronounce={pronounces[0]} status={(targetPosition === 0) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(1)} pronounce={pronounces[1]} status={(targetPosition === 1) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(2)} pronounce={pronounces[2]} status={(targetPosition === 2) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(3)} pronounce={pronounces[3]} status={(targetPosition === 3) ? sampleStatus: ''} sameWord={sameWord} />
            </div>
            <div className={'tutorial-intro'}>{text}</div>
        </>
    )
}

export default TutorialRow