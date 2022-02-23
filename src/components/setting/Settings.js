import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Grow,
    IconButton,
    Grid,
    Switch,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import dayjs from 'dayjs'

import Emoji from './Emoji'

import { useSelector, useDispatch } from 'react-redux'
import { setContrast } from '../../store/slice/colourSlice'
import { setAutoScroll } from '../../store/slice/settingSlice'

import setting from '../../utils/setting'
import record from '../../utils/record'
import config from '../../utils/configuration'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function SettingLink({
    label,
    linkLabel,
    link,
    onClick,
}) {
    return (
        <div>
            <div className={'setting-item-container'}>
                <div className={'setting-item-title'}>
                    {label}
                </div>
            </div>
            {onClick ? (
                <div className={'setting-item-link'}>
                    <div 
                        className={'setting-item-clickable'}
                        onClick={onClick}>
                            {linkLabel}
                    </div>
                </div>
            ) : (
                <div className={'setting-item-link'}>
                    <a href={link}>{linkLabel}</a>
                </div>
            )}
            
        </div>
    )
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
            {setValue && (
                <div className={'setting-item-switch'}>
                    <Switch 
                        checked={value}
                        color={isContrast ? 'warning' : 'primary'}
                        onChange={setValue}
                    />
                </div>
            )}
        </div>
    )
}

function Settings({
    dateIndex,
    open,
    handleClose,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const autoScroll = useSelector((state) => state.setting.autoScroll)
    const dispatch = useDispatch()

    const [ openEmoji, setOpenEmoji ] = useState(false)
    const [ emojiList, setEmoji ] = useState(setting.default_emoji)

    useEffect(() => {
        refreshEmoji()
    }, [])

    const refreshEmoji = () => {
        const s = setting.load()
        if (s.emoji) {
            setEmoji(s.emoji)
        }
    }

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
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <SettingToggle
                            label={'困難模式'}
                            description={'我地玩法咁唔同，好難做困難模式啵'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
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
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
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
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <SettingLink 
                            label={`分享訊息: ${emojiList}`}
                            linkLabel={'按此修改'}
                            onClick={() => setOpenEmoji(true)}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <SettingLink 
                            label={'提出建議'}
                            linkLabel={'Email'}
                            link={'mailto:wallywai.walter@gmail.com'}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <div style={{ 
                    fontSize: '9px',
                }}>
                    <div style={{
                        display: 'block',
                        float: 'right',
                    }}>
                        #{dateIndex} version {config.version}
                    </div>
                    <div style={{
                        display: 'block',
                        float: 'right',
                    }}>
                        Copyright Josh Wardle 2021-{dayjs().format('YYYY')}, the original creator for Wordle! All Rights Reserved.
                    </div>
                </div>
            </DialogActions>
            <Emoji
                open={openEmoji}
                handleClose={() => {
                    refreshEmoji()
                    setOpenEmoji(false)
                }}
            />
        </Dialog>
    )
}

export default Settings