import React, { useMemo } from 'react'

function DistributionBar({
    guess,
    number,
    current,
    highest,
}) {
    const barWidth = useMemo(() => {
        const ratio = (number / highest) * 90
        return parseInt(ratio) + 10 + '%'
    }, [number, highest])

    return (
        <div className={'distribution-row'}>
            <div className={'distribution-guess'}>{guess}</div>
                <div className={'distribution-bar-container'}>
                    <div 
                        className={'distribution-bar'}
                        style={{
                            width: barWidth,
                            backgroundColor: (current === guess) ? '#538d4e' : '#4e4e4e',
                        }}
                    >
                        <div className={'distribution-number'}>
                            {number}
                        </div>
                    </div>
                </div>
        </div>  
    )
}

export default DistributionBar