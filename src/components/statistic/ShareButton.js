import React from 'react'
import {
    Button,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

import record from '../../utils/record'
import setting from '../../utils/setting'

function ShareButton() {

    const copySharableToClipboard = () => {
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
        // clipboard API can only be used through https so alert the result
        alert(shareStr)
        console.log(shareStr)
        navigator.clipboard.writeText(shareStr)
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