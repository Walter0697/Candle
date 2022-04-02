import React, { useMemo } from 'react'
import {
    Button,
} from '@mui/material'
import { useSelector } from 'react-redux'

import ShareIcon from '@mui/icons-material/Share'

import { useSnackbar } from 'notistack'

import record from '../../utils/record'
import colour from '../../utils/colour'

function ShareButton() {
    const isContrast = useSelector((state) => state.colour.isContrast)

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

    const copySharableToClipboard = async () => {
        const progress = record.load()
        const date = record.get_date()

        let winning_row = 'X'
        let progress_row = []
        for (let i = 0; i < progress.length; i++) {
            const row = progress[i]
            let is_winning_row = true
            let current_progress = ''
            for (let j = 0; j < row.length; j++) {
                if (row[j].status !== 'ggg') {
                    is_winning_row = false
                }

                if (row[j].status === 'ggg') {
                    current_progress += correctColor
                } else if (row[j].status === 'xxx') {
                    current_progress += incorrectColor
                } else {
                    current_progress += placeColor
                }
            }
            progress_row.push(current_progress)
            if (is_winning_row) {
                winning_row = i + 1
                break
            }
        }
        
        let shareStr = `粵道 ${date} ${winning_row}/9\n\n`
        shareStr += progress_row.join('\n')

        if (navigator.share) {
            const result = await navigator.share({
                text: shareStr,
            })
        } else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareStr)
            }
            enqueueSnackbar('復製左啦～', { autoHideDuration: 1000 })
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
                onClick={copySharableToClipboard}
            >
                分享<ShareIcon sx={{ marginLeft: '8px' }} />
            </Button>
        </div>
    )
}

export default ShareButton