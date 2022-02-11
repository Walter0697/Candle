import React from 'react'
import {
    Grid,
} from '@mui/material'

import NextWordle from './NextWordle'
import ShareButton from './ShareButton'

function BottomInfo({

}) {
    return (
        <Grid container>
            <Grid item xs={6} md={6} lg={6}
                className={'bottombar-seperate'}
            >
                <NextWordle />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
                <ShareButton />
            </Grid>
        </Grid>
    )
}

export default BottomInfo