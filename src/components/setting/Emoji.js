import React, { useState, useEffect, useMemo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'

import CloseIcon from '@mui/icons-material/Close'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function EmojiChoice({
    value,
    selected,
    setValue,
}) {
    return (
        <Grid item xs={12} md={12} lg={12}
            style={{
                letterSpacing: '15px',
                backgroundColor: (value === selected) ? '#51c4fbd1' : '#7a797987',
                borderRadius: '10px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px',
                cursor: 'pointer',
            }}
            onClick={() => setValue(value)}
        >
            {value}
        </Grid>
    )
}

function Emoji({
    open,
    handleClose,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const correctColor = useMemo(() => {
        if (isContrast) return '🟧'
        return '🟩'
    }, [isContrast])

    const placeColor = useMemo(() => {
        if (isContrast) return '🟦'
        return '🟨'
    }, [isContrast])

    const incorrectColor = useMemo(() => {
        return '⬛'
    }, [])

    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionUp}
            PaperProps={{
                style: {
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
                >關於分享訊息</div>
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
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            由於本作同其他作品都好唔同，包含左錯一邊岩一邊錯嘅制度，所以分享嘅訊息都好難諗。
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            再加上我地試左好多唔同其他emoji，最後唔同電話都未必show到出黎。
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            所以我地決定用番本來嘅分享訊息，不過你地岩同錯嘅資訊就會相對地簡化左。
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            依家分享訊息會係咁樣：如果一個格係全對，就會有{correctColor}，全錯，就會有{incorrectColor}，其餘嘅，就係{placeColor}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            如果你有更加好嘅idea，歡迎email話我地知！
                        </div>
                    </Grid>
                    {/* <EmojiChoice value={'🟢🌚🌕🌗🌓🟣'} selected={emojiList} setValue={setToCurrentEmoji}/>
                    <EmojiChoice value={'正錯位聲韻調'} selected={emojiList} setValue={setToCurrentEmoji}/> */}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Emoji