import React from 'react'

import DistributionBar from './DistributionBar'

function Distribution({
    info,
    highest
}) {
    return (
        <div className={'distribution-container'}>
            <DistributionBar guess={1} number={info[1]} highest={highest}/>
            <DistributionBar guess={2} number={info[2]} highest={highest}/>
            <DistributionBar guess={3} number={info[3]} highest={highest}/>
            <DistributionBar guess={4} number={info[4]} highest={highest}/>
            <DistributionBar guess={5} number={info[5]} highest={highest}/>
            <DistributionBar guess={6} number={info[6]} highest={highest}/>
        </div>
    )
}

export default Distribution