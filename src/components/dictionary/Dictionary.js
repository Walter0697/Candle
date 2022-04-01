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

import check from '../../utils/check'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function Dictionary({
    open,
    handleClose,
}) {
    const [ searchingText, setText ] = useState('')
    const [ searchingResult, setResult ] = useState([])

    const [ resultText, setResultText ] = useState('')
    const [ errorMessage, setError ] = useState('')

    const searchWord = () => {
        const result = check.wordByPronunciation(searchingText)
        if (result) {
            setError('')
            setResult(result)
            setResultText(`${searchingText}嘅可能性係：`)
        } else {
            setError(`我地字庫中似乎無任何字嘅發音係${searchingText}`)
            setResult([])
            setResultText('')
        }
    }
    
    const onKeyPress = (e) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            searchWord()
        }
    }

    useEffect(() => {
        const randomStart = check.getRandomPronunciation()
        setText(randomStart.pronunciation)
        setResult(randomStart.words)
    }, [])

    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'xs'}
            scroll={'paper'}
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionUp}
            PaperProps={{
                style: {
                    height: '50%',
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
                >查字</div>
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
                        <div 
                            style={{
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            我想查下：
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <div
                            style={{
                                marginBottom: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <input
                                className={'search-input-box'}
                                value={searchingText}
                                onChange={(e) => setText(e.target.value)}
                                onKeyUp={onKeyPress}
                            />
                        </div>
                    </Grid>
                    {errorMessage && (
                        <Grid item xs={12} md={12} lg={12}
                            style={{
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'red',
                            }}
                        >
                            {errorMessage}
                        </Grid>
                    )}
                    {resultText && (
                        <Grid item xs={12} md={12} lg={12}
                            style={{
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {resultText}
                        </Grid>
                    )}
                    <Grid item xs={12} md={12} lg={12}>
                        {searchingResult.map((result, index) => (
                            <div key={index}>
                                {result}
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Dictionary