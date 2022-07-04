import React, { useMemo } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import IosShareIcon from '@mui/icons-material/IosShare'
import CloseIcon from '@mui/icons-material/Close'

import colour from '../../utils/colour'

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function ShareExplain({
    shareDisplay,
    open,
    handleClose,
}) {

    const isContrast = useSelector((state) => state.colour.isContrast)

    const buttonColor = useMemo(() => {
        return colour.getCorrectColour(isContrast)
    }, [isContrast])

    return (
        <Dialog
            className={'notpaste'}
            fullWidth
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionUp}
            PaperProps={{
                style: {
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
                >分享方法</div>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {shareDisplay === 'image' ? (
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12}
                            className={'setting-item-wrap'}
                        >
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2}>
                                    <IosShareIcon sx={{ color: buttonColor }}/>
                                </Grid>
                                <Grid item xs={10} md={10} lg={10}>
                                    分享圖片可以用你裝置嘅分享系統比各大社交媒體，不過看似電腦分享嘅功能就唔太多人使用。
                                </Grid>
                            </Grid>
                        </Grid>
                         <Grid item xs={12} md={12} lg={12}
                            className={'setting-item-wrap'}
                        >
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2}>
                                    <SaveAltIcon sx={{ color: buttonColor }}/>
                                </Grid>
                                <Grid item xs={10} md={10} lg={10}>
                                    儲存圖片可以直接擺係相簿，可以記低或者係通訊軟件傳送比朋友。
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}
                            className={'setting-item-wrap'}
                        >
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2}>
                                    <ContentCopyIcon sx={{ color: buttonColor }}/>
                                </Grid>
                                <Grid item xs={10} md={10} lg={10}>
                                    複製圖片可以得到一堆由data:image/png開始好似亂碼一樣嘅野，不過只要擺入url度，就算離線都照樣可以睇到圖片。不過就不適合於社交媒體直接貼上。
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ): (
                    <Grid container>
                    <Grid item xs={12} md={12} lg={12}
                            className={'setting-item-wrap'}
                        >
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2}>
                                    <IosShareIcon sx={{ color: buttonColor }}/>
                                </Grid>
                                <Grid item xs={10} md={10} lg={10}>
                                    分享文字可以用你裝置嘅分享系統比各大社交媒體，不過看似電腦分享嘅功能就唔太多人使用。
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}
                            className={'setting-item-wrap'}
                        >
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2}>
                                    <ContentCopyIcon sx={{ color: buttonColor }}/>
                                </Grid>
                                <Grid item xs={10} md={10} lg={10}>
                                    複製文字可以直接得到成段分享訊息，再係你想要嘅平台上貼上即可。
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
                
            </DialogContent>
        </Dialog>
    )
}

export default ShareExplain