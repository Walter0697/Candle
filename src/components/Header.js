import React, { useMemo } from 'react'
import {
    Grid,
} from '@mui/material'

import { useSelector } from 'react-redux'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import TranslateIcon from '@mui/icons-material/Translate'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'

import display from '../utils/display'

function Header({
    openStatistic,
    openSetting,
    openTutorial,
    openDictionary,
}) {
    const difficulty = useSelector((state) => state.setting.difficulty) 

    const difficultinfo = useMemo(() => {
        const info = display.difficulty()
        if (!info) return null

        return info[difficulty]
    }, [difficulty])

    const difficultLabel = useMemo(() => {
        const current = difficultinfo
        if (!current) return ''

        return current.label + '難易度'
    }, [difficultinfo])

    const difficultyColor = useMemo(() => {
        const current = difficultinfo
        if (!current) return ''

        return current.color
    })

    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}
                className='header'
            >
                <div>
                    <HelpOutlineIcon 
                        className='clickable'
                        onClick={openTutorial}
                        sx={{ fontSize: '25px', color: '#565758' }}
                    />
                    <TranslateIcon 
                        className='clickable'
                        onClick={openDictionary}
                        sx={{ fontSize: '25px', color: '#565758', marginLeft: '10px' }}
                    />
                </div>
                <div className='title notpaste'>
                    粵道
                    <div className='difficulty-header-label' style={{
                        color: difficultyColor,
                    }}>
                        {difficultLabel}
                    </div>
                </div>
                <div>
                    <BarChartIcon 
                        className='clickable'
                        onClick={openStatistic}
                        sx={{ fontSize: '25px', color: '#565758', marginRight: '10px'  }}
                    />
                    <SettingsIcon 
                        className='clickable'
                        onClick={openSetting}
                        sx={{ fontSize: '25px', color: '#565758' }}
                    />
                </div>
            </Grid>
        </Grid>
    )
}

export default Header