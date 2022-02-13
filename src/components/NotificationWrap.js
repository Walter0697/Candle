import { SnackbarProvider } from 'notistack'
import {
  Fade,
} from '@mui/material'

function NotificationWrap({ children }) {
    return (
        <SnackbarProvider 
            maxSnack={8}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }} 
            TransitionComponent={Fade} 
            content={(key, message) => (
                <div className={'snackbarContainer'} key={key}>
                    <div className={'snackbarItem'}>
                        {message}
                    </div>
                </div>
            )}
        >
            {children}
        </SnackbarProvider>
    )
}

export default NotificationWrap