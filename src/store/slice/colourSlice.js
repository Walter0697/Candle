import { createSlice } from '@reduxjs/toolkit'

export const colourSlice = createSlice({
    name: 'colour',
    initialState: {
        contrast: false,
    },
    reducers: {
        toggle: (state, action) => {
            state.contrast = action.payload.value
        },
    },
})

export const { toggle } = colourSlice.actions

export default colourSlice.reducer