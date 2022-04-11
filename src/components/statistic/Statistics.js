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

import Distribution from './Distribution'
import BottomInfo from './BottomInfo'

import record from '../../utils/record'
import config from '../../utils/configuration'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function StatisticItem({
    number,
    description,
}) {
    return (
        <div className={'statitem-container'}>
            <div className={'statitem-number'}>{number}</div>
            <div className={'statitem-description'}>{description}</div>
        </div>
    )
}

function Statistics({ 
    date,
    statechange,
    open,
    handleClose,
}) {
    // total statistic
    const [ totalPlay, setTotal ] = useState(0)
    const [ winRate, setWinRate ] = useState(0)
    const [ currentStreak, setCurrentStreak ] = useState(0)
    const [ highestStreak, setHighestStreak ] = useState(0)

    // distribution statistic
    const [ guessDistribution, setDistribution ] = useState({})
    const [ highestGuess, setHighestGuess ] = useState(0)
    const [ currentWinningRow, setWinningRow ] = useState(0)

    // sharable content
    const [ isGameFinished, setGameFinished ] = useState(false)

    useEffect(() => {
        if (record.is_today(date)) {
            const currentStatus = record.status()
            if (currentStatus === 'win') {
                const progress = record.load()
                let winning_row = 0
                for (let i = 0; i < progress.length; i++) {
                    if (progress[i].length === 0) {
                        break
                    }
                    winning_row = i + 1
                }
                setWinningRow(winning_row)

                setGameFinished(true)
            } else if (currentStatus === 'loss') {
                setWinningRow(-1)

                setGameFinished(true)
            } else {
                setGameFinished(false)
            }
        }

        const history = record.history()
        const played = history.length
        let guesses = {}
        for (let i = 1; i <= config.maxRow; i++) {
            guesses[i] = 0
        }
        if (played !== 0) {
            setTotal(history.length)
            let win = 0
            let highest = 0
            let current = 0
            for (let i = 0; i < history.length; i++) {
                const h = history[i]
                if (h.row !== -1) {
                    guesses[h.row]++
                    win++
                    current++
                } else {
                    if (current > highest) {
                        highest = current
                    }
                    current = 0
                }
            }
            if (current > highest) highest = current

            let maxGuess = 0
            for (var guess in guesses) {
                if (guesses[guess] > maxGuess) maxGuess = guesses[guess]
            }

            if (win === 0) {
                setWinRate(0)
                setCurrentStreak(0)
                setHighestStreak(0)
                setHighestGuess(0)
            } else {
                setWinRate(parseInt((win / played) * 100))
                setCurrentStreak(current)
                setHighestStreak(highest)
                setHighestGuess(maxGuess)
            }
            setDistribution(() => guesses)
        }
    }, [statechange, date])

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
                    backgroundColor: '#202020',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '700',
                },
            }}
        >
            <DialogTitle>
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
                        className={'statistic-title'}
                    >
                        統計
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'statistic-info'}
                    >
                        <StatisticItem 
                            number={totalPlay}
                            description={'玩左幾次'}
                        />
                        <StatisticItem 
                            number={winRate}
                            description={'勝率%'}
                        />
                        <StatisticItem 
                            number={currentStreak}
                            description={'現在連勝'}
                        />
                        <StatisticItem 
                            number={highestStreak}
                            description={'最高連勝'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'statistic-title'}
                    >
                        估中次數
                    </Grid>
                    {(highestGuess !== 0) ? (
                        <Grid item xs={12} md={12} lg={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Distribution 
                                info={guessDistribution}
                                highest={highestGuess}
                                current={currentWinningRow}
                            />
                        </Grid>
                    ) : (
                        <Grid item xs={12} md={12} lg={12}
                            className={'no-data'}
                        >
                            無資料，贏左舖先再睇啦
                        </Grid>
                    )}
                    {isGameFinished && open && (
                        <Grid item xs={12} md={12} lg={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <BottomInfo />
                        </Grid>
                    )}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Statistics