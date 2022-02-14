import { configureStore } from '@reduxjs/toolkit'
import colourReducer from './slice/colourSlice'

export default configureStore({
    reducer: {
        colour: colourReducer,
    },
})