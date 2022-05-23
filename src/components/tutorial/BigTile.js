import React, { useMemo } from 'react'
import {
    Grid,
} from '@mui/material'
import { 
    useSpring,
    config,
    animated,
} from '@react-spring/web'
import { useSelector } from 'react-redux'

import colour from '../../utils/colour'
import rand from '../../utils/rand'

function BigTile({
    word,
    initial,
    final,
    tone,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const status = useMemo(() => {
        let output = 'x'
        const yPos = rand.randomInt(2)
        output = yPos === 0 ? 'y' + output : output + 'y'
        const gPos = rand.randomInt(2)
        output = gPos === 0 ? 'g' + output : output + 'g'
        return output
    }, [])

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
        to: { transform: status ? 'rotateY(180deg)': 'rotateY(0deg)' },
    })

    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}
                className={'bigtile-description'}
            >
                粵道嘅格仔分為三部份：上半部份、左下角、右下角。
            </Grid>
            <Grid item xs={12} md={12} lg={12}
                className={'bigtile-description bigtile-detail'}
            >
                上半部份代表聲調，姐係數字個部份
            </Grid>
            <Grid item xs={12} md={12} lg={12}
                className={'bigtile-container'}
            >
                <animated.div 
                    className={'notpaste bigtilebox bigtile-wrap'}
                    style={{
                        transform: transform,
                    }}
                >
                    <div
                        className={'flippable'}
                    >
                        <div className={'bigtile-text'}>
                            {word}
                        </div>
                    </div>
                    <div 
                        className={'back-flippable'}
                    >
                        <div className={'bigtilebox'}>
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
                            <div className={'bigtilebox-text'}>
                                {word ? <>{word}</> : <>&nbsp;</>}
                            </div>
                            <div className={'bigtile-pronounce'}>
                                <span style={{ color: leftColor === incorrectColour ? 'white' : leftColor }}>{initial}</span>
                                <span style={{ color: rightColor === incorrectColour ? 'white' : rightColor }}>{final}</span>
                                <span style={{ color: topColor === incorrectColour ? 'white' : topColor }}>{tone}</span>
                            </div>
                        </div>
                        
                    </div>
                </animated.div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}
                className={'bigtile-description bigtile-detail'}
            >
                左下角代表聲母，姐係英文發音前半部份
            </Grid>
            <Grid item xs={6} md={6} lg={6}
                className={'bigtile-description bigtile-detail'}
            >
                右下角代表韻母，姐係英文發音後半部份
            </Grid>
        </Grid>
    )
}

export default BigTile