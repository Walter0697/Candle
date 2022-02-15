import { configureStore } from '@reduxjs/toolkit'
import colourReducer from './slice/colourSlice'
import settingReducer from './slice/settingSlice'

export default configureStore({
    reducer: {
        colour: colourReducer,
        setting: settingReducer,
    },
})