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

function About({
    open,
    handleClose,
}) {
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
                >關於粵道</div>
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
                        <div className={'notpaste about-container'}>
                            粵道入面嘅字庫最主要係跟隨<a href={'https://github.com/rime/rime-cantonese'}>Rime 粵語拼音方案</a>裡面嘅字庫，如果有任何差錯嘅話可以聯絡我地，我地會盡快更新！
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste about-container'}>
                            我地只係拎左粵語拼音方案字庫中嘅四字詞語，然後再人手篩選常用嘅四字成語作為答案，盡量希望出現嘅答案，都唔會係過份困難，或者係唔多人知嘅四字成語。玩家選擇嘅詞語就只要係粵語拼音方案字庫中嘅四字詞語就可以，所以你可以嘗試「士多啤梨」等等唔係成語嘅四字詞，但係唔會係答案。
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={'notpaste about-container'}>
                            現時嘅玩法經過左我地朋友圍內自己玩左一段時間，接收左不同意見，再引入有如「查字」、「難易度提示」等等嘅新功能令大家可以玩得更加投入。如果有任何意見令遊戲可以更加好玩，都歡迎聯絡我地。
                        </div>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default About