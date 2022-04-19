import React, { useMemo } from 'react'
import {
    Button,
} from '@mui/material'

import { useSelector } from 'react-redux'

import colour from '../../utils/colour'
import display from '../../utils/display'

function DifficultyButton({
    difficultySetting,
    handleClick,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const difficulty = useSelector((state) => state.setting.difficulty)

    const background = useMemo(() => {
        if (difficultySetting === difficulty) {
            return colour.getCorrectColour(isContrast)
        }
        return colour.getIncorrectColour(isContrast)
    }, [difficultySetting, difficulty, isContrast])

    const textInfo = useMemo(() => {
        const info = display.difficulty()
        return info[difficultySetting]
    }, [difficultySetting])

    const title = useMemo(() => {
        return textInfo.label
    }, [textInfo])

    const description = useMemo(() => {
        return textInfo.description
    }, [textInfo])

    const onClickHandler = () => {
        handleClick(difficultySetting)
    }

    return (
        <Button 
            className={'difficulty-button'}
            style={{
                backgroundColor: background,
            }}
            onClick={onClickHandler}
        >
            <div className={'difficulty-container'}>
                {title}
                <div className={'difficulty-description'}>
                    {description}
                </div>
            </div>
        </Button>
    )
}

export default DifficultyButton