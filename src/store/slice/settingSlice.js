import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        autoScroll: true,
        smoothInput: false,
    },
    reducers: {
        setAutoScroll: (state, action) => {
            state.autoScroll = action.payload.value
        },
        setSmoothInput: (state, action) => {
            state.smoothInput = action.payload.value
        },
    },
})

export const { setAutoScroll, setSmoothInput } = settingSlice.actions

export default settingSlice.reducer