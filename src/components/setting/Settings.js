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
import { setContrast } from '../../store/slice/colourSlice'
import { setAutoScroll } from '../../store/slice/settingSlice'

import setting from '../../utils/setting'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function SettingToggle({
    label,
    description,
    isContrast,
    value,
    setValue,
}) {
    return (
        <div>
            <div className={'setting-item-container'}>
                <div className={'setting-item-title'}>
                    {label}
                </div>
                <div className={'setting-item-description'}>
                    {description}
                </div>
            </div>
            <div className={'setting-item-switch'}>
                <Switch 
                    checked={value}
                    color={isContrast ? 'warning' : 'primary'}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}

function Settings({
    open,
    handleClose,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const autoScroll = useSelector((state) => state.setting.autoScroll)
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
                            isContrast={isContrast}
                            value={isContrast}
                            setValue={(e) => {
                                setting.save('contrast', e.target.checked)
                                dispatch(setContrast({ value: e.target.checked }))
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <SettingToggle 
                            label={'自動轉行'}
                            description={'估完一次之後會唔會自動轉行'}
                            isContrast={isContrast}
                            value={autoScroll}
                            setValue={(e) => {
                                setting.save('autoscroll', e.target.checked)
                                dispatch(setAutoScroll({ value: e.target.checked }))
                            }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Settings