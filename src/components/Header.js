import React from 'react'
import {
    Grid,
} from '@mui/material'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'

function Header({
    openStatistic,
}) {
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}
                className='header'
            >
                <div>
                    <HelpOutlineIcon 
                        onClick={() => console.log('tesing')}
                        sx={{ fontSize: '25px', color: '#565758' }}
                    />
                </div>
                <div className='title'>粵道</div>
                <div>
                    <BarChartIcon 
                        onClick={openStatistic}
                        sx={{ fontSize: '25px', color: '#565758', marginRight: '10px'  }}
                    />
                    <SettingsIcon 
                        onClick={() => console.log('tesing')}
                        sx={{ fontSize: '25px', color: '#565758' }}
                    />
                </div>
            </Grid>
        </Grid>
    )
}

export default Header