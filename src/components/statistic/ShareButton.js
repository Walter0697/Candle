import React, { useMemo } from 'react'
import {
    Button,
} from '@mui/material'
import { useSelector } from 'react-redux'

import ShareIcon from '@mui/icons-material/Share'

import { useSnackbar } from 'notistack'

import record from '../../utils/record'
import colour from '../../utils/colour'
import display from '../../utils/display'
import share from '../../utils/share'

function ShareButton() {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const difficulty = useSelector((state) => state.setting.difficulty)
    const testingSetting = useSelector((state) => state.setting.testing)

    const correctColor = useMemo(() => {
        if (isContrast) return '🟧'
        return '🟩'
    }, [isContrast])

    const placeColor = useMemo(() => {
        if (isContrast) return '🟦'
        return '🟨'
    }, [isContrast])

    const incorrectColor = useMemo(() => {
        return '⬛'
    }, [])

    const buttonColor = useMemo(() => {
        return colour.getCorrectColour(isContrast)
    }, [isContrast])
    
    const { enqueueSnackbar } = useSnackbar()

    const copyCallback = () => {
        enqueueSnackbar('復製左啦～', { autoHideDuration: 1000 })
    }

    const copySharableToClipboard = async () => {
        const progress = record.load()
        const date = record.get_date()
        const difficultyInfo = display.difficulty()
        const difficultyText = difficultyInfo[difficulty].label

        const shareStr = share.generate_text(progress, date, difficultyText, {
            correctColor, placeColor, incorrectColor
        })

        share.share_text(shareStr, copyCallback)
    }

    const generateSharableImage = async () => {
        const progress = record.load()
        const date = record.get_date()
        const difficultyInfo = display.difficulty()
        const difficultyText = difficultyInfo[difficulty].label
        const colourInfo = colour.allColor(isContrast)

        const dataURL = share.generate_image(progress, date, difficultyText, colourInfo)
        share.share_image(`candle-${date}.png`, dataURL)
    }

    const shareButtonClick = () => {
        if (testingSetting) {
            generateSharableImage()
        } else {
            copySharableToClipboard()
        }
    }

    return (
        <div className={'bottombar-item'}>
            <Button
                variant='contained'
                style={{
                    marginTop: '5px',
                    backgroundColor: buttonColor,
                    fontSize: '20px',
                    width: '80%',
                    fontWeight: '700',
                }}
                onClick={shareButtonClick}
            >
                分享<ShareIcon sx={{ marginLeft: '8px' }} />
            </Button>
        </div>
    )
}

export default ShareButton