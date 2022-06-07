import React, { useMemo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import TranslateIcon from '@mui/icons-material/Translate'

import TutorialRow from './TutorialRow'
import BigTile from './BigTile'

import setting from '../../utils/setting'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function Tutorial({
    open,
    handleClose,
}) {
    const tutorialWords = useMemo(() => {
        return setting.rand_tutorial()
    }, [])

    const tutorialYellow = useMemo(() => {
        return setting.yellow_tutorial()
    }, [])

    const yellowTutorialLine = useMemo(() => {
        let yyyIndex = ''
        for (let i = 0; i < 4; i++) {
            if (tutorialYellow.status[`w${i}`] === 'yyy') {
                yyyIndex = i
            }
        }
        const targetWord = tutorialYellow.guess.idiom.charAt(yyyIndex)
        const ansInitial = tutorialYellow.answer[`w${tutorialYellow.yellowStatus.initial}`]
        const ansFinal = tutorialYellow.answer[`w${tutorialYellow.yellowStatus.final}`]
        const ansTone = tutorialYellow.answer[`w${tutorialYellow.yellowStatus.tone}`]
        const ansInitialPro = ansInitial.initial + ansInitial.final + ansInitial.tone
        const ansFinalPro = ansFinal.initial + ansFinal.final + ansFinal.tone
        const ansTonePro = ansTone.initial + ansTone.final + ansTone.tone

        return `當聲母，韻母同聲調都有出現係四個字之中，但係唔係同一個字入面嘅話，我地會分開黃色嘅格仔黎顯示。係上面嘅例子，答案係「${tutorialYellow.answer.idiom}」，估計中嘅「${targetWord}」字有「${ansInitial.word}」（${ansInitialPro}）中嘅聲母，「${ansFinal.word}」（${ansFinalPro}）中嘅韻母，同「${ansTone.word}」（${ansTonePro}）中嘅聲調。為左分開同音字以及唔同部份嘅錯位，我地想有特別啲嘅顯示方法。`
    }, [tutorialYellow])

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
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                如果你想查下呢個發音會係咩中文字，可以試下 <TranslateIcon sx={{ color: '#565758', fontSize: '12px', backgroundColor: '#191b20', verticalAlign: 'bottom', padding: '5px', borderRadius: '3px' }}/> 嘅查字功能
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
                            <Grid item xs={12} md={12} lg={12}
                                className={'bigtile-row'}
                            >
                                <BigTile 
                                    word={'粵'}
                                    initial={'j'}
                                    final={'yut'}
                                    tone={'6'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    info={tutorialWords[0]}
                                    sampleStatus={'gxx'}
                                    sameWord={true}
                                    hasWord={false}
                                    hasSameWord={false}
                                    explain={'格仔入面有呢隻色，就代表答案入面「{target}」聲母嘅位置正確'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    info={tutorialWords[1]}
                                    sampleStatus={'xyx'}
                                    sameWord={false}
                                    hasWord={false}
                                    hasSameWord={false}
                                    explain={'格仔入面有呢隻色，就代表答案入面「{target}」韻母存在係呢個答案度，但係位置唔正確'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row-end'}
                            >
                                <TutorialRow 
                                    info={tutorialWords[4]}
                                    sampleStatus={'xxx'}
                                    sameWord={false}
                                    hasWord={false}
                                    hasSameWord={false}
                                    explain={'「{target}」呢度聲母同韻母都唔正確'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    info={tutorialWords[5]}
                                    sampleStatus={'ggg'}
                                    sameWord={false}
                                    hasWord={false}
                                    hasSameWord={false}
                                    explain={'特別啲嘅情況就係呢種，「{target}」聲母，韻母，聲調，同位置都正確，不過唔係呢個字'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    info={tutorialWords[6]}
                                    sampleStatus={'yyy'}
                                    sameWord={false}
                                    hasWord={true}
                                    hasSameWord={false}
                                    explain={'同上面情況相似，「{target}」聲母，韻母，聲調都正確，不過唔係呢個字，都唔係呢個位置'}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}
                                className={'tutorial-row'}
                            >
                                <TutorialRow 
                                    info={tutorialYellow.guess}
                                    statusList={tutorialYellow.status}
                                    sameWord={false}
                                    hasWord={false}
                                    hasSameWord={false}
                                    explain={yellowTutorialLine}
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
                            <Grid item xs={12} md={12} lg={12}
                                className={'tutorial-intro'}
                            >
                                註：以上示範嘅四字詞語唔一定會係字庫入面
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )   
}

export default Tutorial