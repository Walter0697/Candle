import React, { useState, useMemo, useEffect } from 'react'
import {
    Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

import IconButton from '@mui/material/IconButton'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import IosShareIcon from '@mui/icons-material/IosShare'

import record from '../../../utils/record'
import colour from '../../../utils/colour'
import display from '../../../utils/display'
import share from '../../../utils/share'

function ImagePreview() {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const difficulty = useSelector((state) => state.setting.difficulty)

    const [ imageDataURL, setDataURL ] = useState(null)

    const buttonColor = useMemo(() => {
        return colour.getCorrectColour(isContrast)
    }, [isContrast])

    const { enqueueSnackbar } = useSnackbar()

    const copyCallback = () => {
        enqueueSnackbar('複製左啦～', { autoHideDuration: 1000 })
    }

    const failCallback = () => {
        enqueueSnackbar('複製失敗左～', { autoHideDuration: 1000 })
    }

    useEffect(() => {
        const progress = record.load()
        const date = record.get_date()
        const difficultyInfo = display.difficulty()
        const difficultyText = difficultyInfo[difficulty].label
        const colourInfo = colour.allColor(isContrast)

        const dataURL = share.generate_image(progress, date, difficultyText, colourInfo)
        setDataURL(dataURL)
    }, [isContrast, difficulty])

    const openURL = () => {
        const image = new Image()
        image.src = imageDataURL

        var w = window.open()
        w.location = imageDataURL
        w.document.write(image.outerHTML)
    }

    const copyURL = () => {
        share.copy_text(imageDataURL, copyCallback, failCallback)
    }

    const saveImage = () => {
        const date = record.get_date()
        share.save_image(`candle-${date}.png`, imageDataURL)
    }

    const shareImage = () => {
        const date = record.get_date()
        share.share_image(`candle-${date}.png`, imageDataURL)
    }

    return (
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}
                className={'share-preview-wrap'}
            >
                {imageDataURL && (
                    <img 
                        onClick={openURL}
                        style={{
                            width: '70%',
                            cursor: 'pointer',
                        }} 
                        src={imageDataURL} 
                    />
                )}
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={copyURL} style={{ color: buttonColor }}>
                    <ContentCopyIcon />
                </IconButton>
                <IconButton onClick={saveImage} style={{ color: buttonColor }}>
                    <SaveAltIcon />
                </IconButton>
                <IconButton onClick={shareImage} style={{ color: buttonColor }}>
                    <IosShareIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ImagePreview