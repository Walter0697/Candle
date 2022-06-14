import React, { useMemo } from 'react'
import {
    Button,
} from '@mui/material'
import { useSelector } from 'react-redux'

import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio'
import TextFieldsIcon from '@mui/icons-material/TextFields'

import colour from '../../utils/colour'

function ShareButton({
    imageShare,
    onClick,
}) {
    const isContrast = useSelector((state) => state.colour.isContrast)

    const buttonColor = useMemo(() => {
        return colour.getCorrectColour(isContrast)
    }, [isContrast])

    const shareButtonClick = () => {
        onClick(imageShare)
    }

    return (
        <div className={'bottombar-item'}>
            <Button
                variant='contained'
                className={'share-button-style'}
                style={{
                    backgroundColor: buttonColor,
                }}
                onClick={shareButtonClick}
            >
                {imageShare ? (
                    <>
                        圖片<ImageAspectRatioIcon sx={{ marginLeft: '8px' }} />
                    </>
                ) : (
                    <>
                        文字<TextFieldsIcon sx={{ marginLeft: '8px' }} />
                    </>
                )}
                
            </Button>
        </div>
    )
}

export default ShareButton