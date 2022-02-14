import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
    Switch,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../store/slice/colourSlice'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function SettingToggle({
    label,
    description,
    onToggle,
}) {
    return (
        <div>
            <div 
                style={{
                    display: 'inline-block',
                    float: 'left',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        fontSize: '18px',
                        fontWeight: '500',
                    }}
                    onClick={onToggle}
                >{label}</div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        fontSize: '12px',
                        color: 'grey',
                        marginTop: '2px',
                    }}
                >{description}</div>
            </div>
            <div style={{
                display: 'inline-block',
                float: 'right'
            }}>
                <Switch 
                    color='warning'
                />
            </div>
        </div>
    )
}

function Settings({
    open,
    handleClose,
}) {
    const contrast = useSelector((state) => state.colour.contrast)
    const dispatch = useDispatch()

    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'xs'}
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
                >設定</div>
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
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <SettingToggle 
                            label={'高對比顏色'}
                            description={'顏色對比會睇落明顯啲'}
                            onToggle={() => dispatch(toggle({value : !contrast}))}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Settings