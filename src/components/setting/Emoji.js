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
        if (isContrast) return 'π§'
        return 'π©'
    }, [isContrast])

    const placeColor = useMemo(() => {
        if (isContrast) return 'π¦'
        return 'π¨'
    }, [isContrast])

    const incorrectColor = useMemo(() => {
        return 'β¬'
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
                >ιζΌεδΊ«θ¨ζ―</div>
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
                            η±ζΌζ¬δ½εεΆδ»δ½ει½ε₯½εεοΌεε«ε·¦ι―δΈιε²©δΈιι―εεΆεΊ¦οΌζδ»₯εδΊ«εθ¨ζ―ι½ε₯½ι£θ«γ
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            εε δΈζε°θ©¦ε·¦ε₯½ε€εεεΆδ»emojiοΌζεΎεει»θ©±ι½ζͺεΏshowε°εΊι»γ
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            ζδ»₯ζε°ζ±Ίε?η¨ηͺζ¬δΎεεδΊ«θ¨ζ―οΌδΈιδ½ ε°ε²©ει―εθ³θ¨ε°±ζηΈε°ε°η°‘εε·¦γ
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            δΎε?ΆεδΊ«θ¨ζ―ζδΏεζ¨£οΌε¦ζδΈεζ ΌδΏε¨ε°οΌε°±ζζ{correctColor}οΌε¨ι―οΌε°±ζζ{incorrectColor}οΌεΆι€εοΌε°±δΏ{placeColor}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste emoji-container'}>
                            ε¦ζδ½ ζζ΄ε ε₯½εideaοΌζ­‘θΏemailθ©±ζε°η₯οΌ
                        </div>
                    </Grid>
                    {/* <EmojiChoice value={'π’πππππ£'} selected={emojiList} setValue={setToCurrentEmoji}/>
                    <EmojiChoice value={'ζ­£ι―δ½θ²ι»θͺΏ'} selected={emojiList} setValue={setToCurrentEmoji}/> */}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Emoji