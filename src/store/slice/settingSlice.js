import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        difficulty: '',
        autoScroll: true,
        smoothInput: false,
        testing: false,
    },
    reducers: {
        setAutoScroll: (state, action) => {
            state.autoScroll = action.payload.value
        },
        setSmoothInput: (state, action) => {
            state.smoothInput = action.payload.value
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload.value
        },
        setTesting: (state, action) => {
            state.testing = action.payload.value
        }
    },
})

export const { setAutoScroll, setSmoothInput, setDifficulty, setTesting } = settingSlice.actions

export default settingSlice.reducer