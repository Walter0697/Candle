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

import setting from '../../utils/setting'

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
    const [ emojiList, setEmoji ] = useState(setting.default_emoji)

    useEffect(() => {
        const s = setting.load()
        if (s.emoji) {
            setEmoji(s.emoji)
        }
    }, [])

    const setToCurrentEmoji = (value) => {
        setting.save('emoji', value)
        setEmoji(value)
    }

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
                >分享訊息設定</div>
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
                    <EmojiChoice value={'🟢🌚🌕🌗🌓🟣'} selected={emojiList} setValue={setToCurrentEmoji}/>
                    <EmojiChoice value={'正錯位聲韻調'} selected={emojiList} setValue={setToCurrentEmoji}/>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Emoji