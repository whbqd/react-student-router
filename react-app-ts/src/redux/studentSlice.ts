import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStudent, addStudent, pacthSutdent } from '../api/student'

export const getStudentList = createAsyncThunk(
    'student/getStudent',
    async (name ?: string) => {
        return await getStudent(name)
    })

export const addStudentList = createAsyncThunk(
    'student/addStudent',
    async (studentParams: StudentType) => {
        return await addStudent(studentParams)
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
            state.studentList = payload
        })
        builder.addCase(addStudentList.fulfilled, (state, { payload }) => {
            state.studentList.push(payload)
        })
    }
})


export const { initStudentList } = studentSlice.actions
export default studentSlice.reducer


