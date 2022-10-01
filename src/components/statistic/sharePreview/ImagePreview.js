import React, { useState, useMemo, useEffect } from 'react'
import {
    Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { isMobile } from 'react-device-detect'

import IconButton from '@mui/material/IconButton'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import IosShareIcon from '@mui/icons-material/IosShare'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

import record from '../../../utils/record'
import colour from '../../../utils/colour'
import display from '../../../utils/display'
import share from '../../../utils/share'

function ImagePreview({
    openExplain,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const difficulty = useSelector((state) => state.setting.difficulty)
    const ordering = isMobile ? [ 'share', 'save', 'copy' ] : [ 'save', 'copy', 'share' ]

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

    const getShareButton = (type) => {
        if (type === 'copy') {
            return (
                <IconButton onClick={copyURL} style={{ color: buttonColor }} key={type}>
                    <ContentCopyIcon />
                </IconButton>
            )
        } else if (type === 'save') {
            return (
                <IconButton onClick={saveImage} style={{ color: buttonColor }} key={type}>
                    <SaveAltIcon />
                </IconButton>
            )
        } else if (type === 'share') {
            return (
                <IconButton onClick={shareImage} style={{ color: buttonColor }} key={type}>
                    <IosShareIcon />
                </IconButton>
            )
        }
    }

    return (
        <Grid container>
            <Grid item xs={2}>
                <IconButton onClick={openExplain} style={{ color: buttonColor }}>
                    <QuestionMarkIcon />
                </IconButton>
            </Grid>
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
                {ordering.map((item_type, _) => getShareButton(item_type))}
            </Grid>
        </Grid>
    )
}

export default ImagePreview