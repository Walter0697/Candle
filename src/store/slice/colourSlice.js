import { createSlice } from '@reduxjs/toolkit'

export const colourSlice = createSlice({
    name: 'colour',
    initialState: {
        isContrast: false,
    },
    reducers: {
        setContrast: (state, action) => {
            state.isContrast = action.payload.value
        },
    },
})

export const { setContrast } = colourSlice.actions

export default colourSlice.reducer