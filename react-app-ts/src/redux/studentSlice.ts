import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ReduxRoot } from '../typings/ReduxRoot'
import { getStudent } from '../api/student'

export const getStudentList = createAsyncThunk(
    'student/getStudent',
    async (name ?: string) => {
        return await getStudent(name)
})
const initialState = {
    studentList: [] as StudentType[]
}
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        initStudentList (state, { payload }) {
            state.studentList = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getStudentList.fulfilled, (state, { payload }) => {
            console.log('resp:::::', state, payload)
            state.studentList = payload
        })
    }
})


export const { initStudentList } = studentSlice.actions
export default studentSlice.reducer


