import React, { useEffect, useState, useMemo } from 'react'

import TutorialTile from './TutorialTile'

import rand from '../../utils/rand'

function TutorialRow({
    info,
    sampleStatus,
    sameWord,
    explain,
}) {
    const [ targetPosition, setTarget ] = useState(-1)

    const words = useMemo(() => {
        return info.idiom
    }, [info])

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
                <TutorialTile word={words.charAt(0)} pronounce={info.w0} status={(targetPosition === 0) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(1)} pronounce={info.w1} status={(targetPosition === 1) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(2)} pronounce={info.w2} status={(targetPosition === 2) ? sampleStatus: ''} sameWord={sameWord} />
                <TutorialTile word={words.charAt(3)} pronounce={info.w3} status={(targetPosition === 3) ? sampleStatus: ''} sameWord={sameWord} />
            </div>
            <div className={'tutorial-intro'}>{text}</div>
        </>
    )
}

export default TutorialRow