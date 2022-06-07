import React, { useEffect, useState, useMemo, useCallback } from 'react'

import TutorialTile from './TutorialTile'

import rand from '../../utils/rand'

function TutorialRow({
    info,
    sampleStatus,
    statusList,
    sameWord,
    hasWord,
    hasSameWord,
    explain,
}) {
    const [ targetPosition, setTarget ] = useState(-1)

    const words = useMemo(() => {
        if (!info) return ''
        if (!info.idiom) return ''
        return info.idiom
    }, [info])

    const text = useMemo(() => {
        const word = targetPosition === -1 ? '' : words.charAt(targetPosition)
        return explain.replace('{target}', word)
    }, [explain, targetPosition, words])

    const getStatus = useCallback((index) => {
        if (sampleStatus) {
            if (index === targetPosition) {
                return sampleStatus
            } else {
                return ''
            }
        }

        return statusList[`w${index}`]
    }, [sampleStatus, statusList, targetPosition])

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
                <TutorialTile word={words.charAt(0)} pronounce={info.w0} status={getStatus(0)} sameWord={sameWord} hasWord={hasWord} hasSameWord={hasSameWord} />
                <TutorialTile word={words.charAt(1)} pronounce={info.w1} status={getStatus(1)} sameWord={sameWord} hasWord={hasWord} hasSameWord={hasSameWord} />
                <TutorialTile word={words.charAt(2)} pronounce={info.w2} status={getStatus(2)} sameWord={sameWord} hasWord={hasWord} hasSameWord={hasSameWord} />
                <TutorialTile word={words.charAt(3)} pronounce={info.w3} status={getStatus(3)} sameWord={sameWord} hasWord={hasWord} hasSameWord={hasSameWord} />
            </div>
            <div className={'tutorial-intro'}>{text}</div>
        </>
    )
}

export default TutorialRow