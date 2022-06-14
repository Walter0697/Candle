import React, { useState } from 'react'
import {
    Grid,
} from '@mui/material'

import ShareButton from './ShareButton'
import ImagePreview from './sharePreview/ImagePreview'
import TextPreview from './sharePreview/TextPreview'

function BottomInfo() {
    const [ currentShareDisplay, setShareDisplay ] = useState('image')

    const setCurrentDisplay = (isImage) => {
        if (isImage) {
            setShareDisplay('image')
        } else {
            setShareDisplay('text')
        }
    }

    return (
        <Grid container>
            <Grid container item xs={12} md={12} lg={12}
                className={'share-message-buttons'}
            >
                <Grid item xs={6} md={6} lg={6}
                    className={'bottombar-seperate'}
                >
                    <ShareButton imageShare={true} onClick={setCurrentDisplay} />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <ShareButton imageShare={false} onClick={setCurrentDisplay} />
                </Grid>
            </Grid>
            {currentShareDisplay === 'image' ? (
                <ImagePreview />
            ) : (
                <TextPreview />
            )}
            
        </Grid>
    )
}

export default BottomInfo