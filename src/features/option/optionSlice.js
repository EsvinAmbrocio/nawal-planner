import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
    name: 'option',
    initialState: {
        value: "tasks"
    },
    reducers: {
        setOption: (state, action) => {
            state.value = action.payload
        }
    }
})

export const OPTIONS_VALUES =  Object.freeze({
    TASKS: 'tasks',
    GOALS: 'goals'
})

export const { setOption } = optionSlice.actions
export default optionSlice.reducer
