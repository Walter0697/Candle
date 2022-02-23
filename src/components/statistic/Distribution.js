import React from 'react'

import DistributionBar from './DistributionBar'

import config from '../../utils/configuration'

function Distribution({
    info,
    current,
    highest,
}) {
    return (
        <div className={'distribution-container'}>
            {[...Array(config.maxRow)].map((item, index) => (
                <DistributionBar key={index} guess={index + 1} number={info[index + 1]} current={current} highest={highest} />
            ))}
        </div>
    )
}

export default Distribution