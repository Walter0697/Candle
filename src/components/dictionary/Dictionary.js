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

import DictionaryTile from './DictionaryTile'

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
                    height: '70%',
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
                        <div className={'dictionarytitle'}
                        >
                            我想查下：
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <div className={'dictionary-input-container'}
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
                        <Grid item xs={12} md={12} lg={12}>
                             <div className={'dictionary-error'}>
                                {errorMessage}
                            </div>
                        </Grid>
                    )}
                    {resultText && (
                        <Grid item xs={12} md={12} lg={12}>
                            <div className={'dictionary-success'}>
                                {resultText}
                            </div>
                        </Grid>
                    )}
                    <Grid item xs={12} md={12} lg={12}>
                        {searchingResult.map((result, index) => (
                            <DictionaryTile 
                                key={index}
                                word={result}
                            />
                        ))}
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Dictionary