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

import { useSelector } from 'react-redux'

import TutorialRow from './TutorialRow'

import record from '../../utils/record'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function Tutorial({
    open,
    handleClose,
}) {
    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'lg'}
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
                >點玩嫁</div>
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
                        <Grid container
                            className={'tutorial-container'}
                        >
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                係九次之內估中一個四字成語！（六次太難啦）
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                每次估都要係一個四字成語，撳撳ENTER就可以估嫁啦。
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                估完之後，就會比番啲色你睇下估唔估得中。同其他WORDLE唔同既係，我地仲會用聲母，韻母同聲調黎比較接唔接近嫁。
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container
                            className={'tutorial-example-container'}
                        >
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                例子
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    words={'認真如初'}
                                    pronounces={['jing6', 'zan1', 'jyu4', 'co1']}
                                    sampleStatus={'ggg'}
                                    explain={'答案入面有「{target}」呢個字，而且位置正確'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    words={'斷絕來往'}
                                    pronounces={['tyun5', 'zyut6', 'loi4', 'wong5']}
                                    sampleStatus={'ggx'}
                                    explain={'「{target}」呢個字岩音，但係聲調唔岩'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    words={'永久保存'}
                                    pronounces={['wing5', 'gau2', 'bou2', 'cyun4']}
                                    sampleStatus={'gxx'}
                                    explain={'「{target}」呢個字位置正確，但係只有聲母相同，如果顏色喺右邊，就代表韻母相同'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    words={'別來無恙'}
                                    pronounces={['bit6', 'loi4', 'mou4', 'joeng6']}
                                    sampleStatus={'xxy'}
                                    explain={'如果有黃色，就代表呢個係錯位，例如呢度，「{target}」呢個字就有聲調岩，而且位置錯左'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row-end'}
                            >
                                <TutorialRow 
                                    words={'閱後即焚'}
                                    pronounces={['jyut6', 'hau6', 'zik1', 'fan4']}
                                    sampleStatus={'xxx'}
                                    explain={'「{target}」呢度聲母同韻母都唔岩'}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container>
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                每日都有一個新既四字成語估！
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                「WORDLE」係由Josh Wardle所設計，後期香港有人創作左倉頡版嘅「JNDLE字道」同埋粵拼版既「ZIDOU」。但係小弟覺得可以做個更加適合用中文玩嘅版本，所以就創作左呢隻四字成語版嘅「粵道」啦。
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )   
}

export default Tutorial