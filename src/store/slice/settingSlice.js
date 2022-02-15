import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        autoScroll: true,
    },
    reducers: {
        setAutoScroll: (state, action) => {
            state.autoScroll = action.payload.value
        },
    },
})

export const { setAutoScroll } = settingSlice.actions

export default settingSlice.reducer