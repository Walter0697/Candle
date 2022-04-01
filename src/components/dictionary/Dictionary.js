import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import check from '../../utils/check'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function Dictionary({
    open,
    handleClose,
}) {
    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'xs'}
            scroll={'paper'}
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionUp}
            PaperProps={{
                style: {
                    height: '100%',
                    backgroundColor: '#202020',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '700',
                },
            }}
        >
            <DialogTitle>
                <div
                    className={'setting-title'}
                >查字</div>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
            </DialogContent>
        </Dialog>
    )
}

export default Dictionary