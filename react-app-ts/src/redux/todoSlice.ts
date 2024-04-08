import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [{
            content: '学习redux',
            status: false,
        }]
    },
    reducers: {
        ADD: (state, { payload }) => {
            state.list.push({
                content: payload,
                status: false
            })
        },
        DEL: (state, { payload }) => {
            state.list.splice(payload, 1)
        },
        UPDATE: (state, { payload }) => {
            state.list[payload].status = !state.list[payload].status
        }
    }
})
export const { ADD, UPDATE, DEL } = todoSlice.actions
export default todoSlice.reducer
