import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grow,
    IconButton,
    Grid,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function UpdateItem({
    version,
    content
}) {
    return (
        <div>
            <div className={'setting-item-container'}>
                <div className={'setting-item-title'}>
                    {version}
                </div>
                <div className={'setting-item-description'}>
                    {content}
                </div>
            </div>
        </div>
    )
}

const TransitionUp = (props) => {
    return <Grow {...props} />
}

function UpdateLog({
    open,
    handleClose,
}) {
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
                >更新資訊</div>
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
                <Grid container>
                <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.7.11'}
                            content={'難易度會在頂層顯示，聲母及韻母間會有空格以免不必要的誤會'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.7.0'}
                            content={'新增圖片分享訊息，昨天及今天答案顯示'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.6.0'}
                            content={'新增全黃顯示方法，增加更新資訊'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.5.0'}
                            content={'增加發音文字顏色'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.4.0'}
                            content={'增加關於'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.3.0'}
                            content={'增加難易度選項'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.2.0'}
                            content={'提示由兩格變為三格'}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}
                        className={'setting-item-wrap'}
                    >
                        <UpdateItem
                            version={'v1.1.0'}
                            content={'增加拼音查字功能'}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateLog