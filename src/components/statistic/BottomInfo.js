import React from 'react'
import {
    Grid,
} from '@mui/material'

import ShareButton from './ShareButton'

function BottomInfo({

}) {
    return (
        <Grid container>
            <Grid item xs={6} md={6} lg={6}
                className={'bottombar-seperate'}
            >
                <ShareButton imageShare={true} />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
                <ShareButton imageShare={false} />
            </Grid>
        </Grid>
    )
}

export default BottomInfo