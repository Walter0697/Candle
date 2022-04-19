import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import DifficultyButton from './DifficultyButton'

import { useSelector, useDispatch } from 'react-redux'
import { setDifficulty } from '../../store/slice/settingSlice'

import setting from '../../utils/setting'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function Difficulty({
    open,
    handleClose,
}) {
    const difficulty = useSelector((state) => state.setting.difficulty)
    const dispatch = useDispatch()

    const setDifficultyLevel = (selected) => {
        setting.save('difficulty', selected)
        dispatch(setDifficulty({ value: selected }))
        handleClose()
    }

    const handleDifficultyClose = () => {
        if (difficulty) {
            handleClose()
        }
    }

    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'xs'}
            open={open}
            onClose={handleDifficultyClose}
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
                >難易度選擇</div>
                {difficulty && (
                    <IconButton
                        aria-label="close"
                        onClick={handleDifficultyClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            </DialogTitle>
            <DialogContent>
                <Grid container className={'difficulty-list-container'}>
                    <Grid item xs={12} md={12} lg={12}>
                        <DifficultyButton 
                            difficultySetting={'easy'}
                            handleClick={setDifficultyLevel}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <DifficultyButton 
                            difficultySetting={'middle'}
                            handleClick={setDifficultyLevel}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <DifficultyButton 
                            difficultySetting={'difficult'}
                            handleClick={setDifficultyLevel}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default Difficulty