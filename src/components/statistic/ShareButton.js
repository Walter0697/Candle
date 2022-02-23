import React from 'react'
import {
    Button,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

import { useSnackbar } from 'notistack'

import record from '../../utils/record'
import setting from '../../utils/setting'
import notification from '../../utils/notification'

function ShareButton() {
    const { enqueueSnackbar } = useSnackbar()

    const copySharableToClipboard = async () => {
        const emoji = setting.emoji_list()
        const progress = record.load()
        const date = record.get_date()

        let winning_row = 'X'
        let progress_row = []
        for (let i = 0; i < progress.length; i++) {
            const row = progress[i]
            let is_winning_row = true
            let current_progress = ''
            for (let j = 0; j < row.length; j++) {
                if (row[j].status !== 'correct') {
                    is_winning_row = false
                }
                current_progress += emoji[row[j].status]
            }
            progress_row.push(current_progress)
            if (is_winning_row) {
                winning_row = i + 1
                break
            }
        }
        
        let shareStr = `粵道 ${date} ${winning_row}/6\n\n`
        shareStr += progress_row.join('\n')

        if (navigator.share) {
            const result = await navigator.share({
                text: shareStr,
            })
            console.log(result)
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
                    backgroundColor: '#538d4e',
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