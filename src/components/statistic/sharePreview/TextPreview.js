import React, { useState, useMemo, useEffect } from 'react'
import {
    Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { isMobile } from 'react-device-detect'

import IconButton from '@mui/material/IconButton'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IosShareIcon from '@mui/icons-material/IosShare'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

import record from '../../../utils/record'
import colour from '../../../utils/colour'
import display from '../../../utils/display'
import share from '../../../utils/share'

function TextPreview({
    openExplain,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)
    const difficulty = useSelector((state) => state.setting.difficulty)
    const ordering = isMobile ? [ 'share', 'copy' ] : [ 'copy', 'share' ]

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

    const [ shareStr, setShareStr ] = useState(null)

    useEffect(() => {
        const progress = record.load()
        const date = record.get_date()
        const difficultyInfo = display.difficulty()
        const difficultyText = difficultyInfo[difficulty].label

        const resultStr = share.generate_text(progress, date, difficultyText, {
            correctColor, placeColor, incorrectColor
        })
        
        setShareStr(resultStr)
    }, [isContrast, difficulty])

    const { enqueueSnackbar } = useSnackbar()

    const copyCallback = () => {
        enqueueSnackbar('複製左啦～', { autoHideDuration: 1000 })
    }

    const failCallback = () => {
        enqueueSnackbar('複製失敗左～', { autoHideDuration: 1000 })
    }

    const copyText = () => {
        share.copy_text(shareStr, copyCallback, failCallback)
    }

    const shareText = () => {
        share.share_text(shareStr, copyCallback, failCallback)
    }

    const getShareButton = (type) => {
        if (type === 'copy') {
            return (
                <IconButton onClick={copyText} style={{ color: buttonColor }}>
                    <ContentCopyIcon />
                </IconButton>
            )
        } else if (type === 'share') {
            return (
                <IconButton onClick={shareText} style={{ color: buttonColor }}>
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
                {shareStr && (
                    <div className={'share-text-preview'}>{shareStr}</div>
                )}
            </Grid>
            <Grid item xs={2}>
                {ordering.map((item_type, _) => getShareButton(item_type))}
            </Grid>
        </Grid>
    )
}

export default TextPreview