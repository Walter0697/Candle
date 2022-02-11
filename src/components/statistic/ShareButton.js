import React from 'react'
import {
    Button,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

function ShareButton() {

    const copySharableToClipboard = () => {
        navigator.clipboard.writeText('testing')
    }

    return (
        <div className={'bottombar-item'}>
            <Button
                variant='contained'
                style={{
                    marginTop: '5px',
                    backgroundColor: '#538d4e',
                    fontSize: '20px',
                    width: '80%',
                    fontWeight: '700',
                }}
                onClick={copySharableToClipboard}
            >
                分享<ShareIcon sx={{ marginLeft: '8px' }} />
            </Button>
        </div>
    )
}

export default ShareButton