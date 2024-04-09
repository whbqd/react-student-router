import { createSlice } from '@reduxjs/toolkit'
import { ReduxRoot } from '../typings/ReduxRoot'

const initialState: ReduxRoot.ReduxStudent = {
    studentList: []
}
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {

    }
})


export const { } = studentSlice.actions
export default studentSlice.reducer


