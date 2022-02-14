import React from 'react'

import DistributionBar from './DistributionBar'

function Distribution({
    info,
    current,
    highest,
}) {
    return (
        <div className={'distribution-container'}>
            <DistributionBar guess={1} number={info[1]} current={current} highest={highest}/>
            <DistributionBar guess={2} number={info[2]} current={current} highest={highest}/>
            <DistributionBar guess={3} number={info[3]} current={current} highest={highest}/>
            <DistributionBar guess={4} number={info[4]} current={current} highest={highest}/>
            <DistributionBar guess={5} number={info[5]} current={current} highest={highest}/>
            <DistributionBar guess={6} number={info[6]} current={current} highest={highest}/>
        </div>
    )
}

export default Distribution