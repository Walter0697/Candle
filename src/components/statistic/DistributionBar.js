import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import colour from '../../utils/colour'

function DistributionBar({
    guess,
    number,
    current,
    highest,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const barWidth = useMemo(() => {
        const ratio = (number / highest) * 90
        return parseInt(ratio) + 10 + '%'
    }, [number, highest])

    const backgroundColor = useMemo(() => {
        if (current !== guess) return '#4e4e4e'
        return colour.getCorrectColour(isContrast)
    }, [current, guess, isContrast])

    return (
        <div className={'distribution-row'}>
            <div className={'distribution-guess'}>{guess}</div>
                <div className={'distribution-bar-container'}>
                    <div 
                        className={'distribution-bar'}
                        style={{
                            width: barWidth,
                            //backgroundColor: (current === guess) ? '#538d4e' : '#4e4e4e',
                            backgroundColor: backgroundColor,
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