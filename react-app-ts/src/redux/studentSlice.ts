import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStudent, addStudent, patchStudent, delStudent, getStudentById } from '../api/student'

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

export const editStudent = createAsyncThunk(
    'student/editStudent',
    async (payload: {id: string, student: StudentType}) => {
        const { id, student } = payload
        const result = await patchStudent(id, student)
        return {
            id,
            student
        }
    })

export const deleteStudent = createAsyncThunk('/student/delStudent', async (id: string) => {
    await delStudent(id)
    return id
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
        builder.addCase(editStudent.fulfilled, (state, { payload}) => {
            const { id, student } = payload
            const findIndex = state.studentList.findIndex(stu => stu.id === id)
            state.studentList[findIndex] = student
        })
        builder.addCase(deleteStudent.fulfilled, (state, { payload: id }) => {
            const findIndex = state.studentList.findIndex(stu => stu.id === id)
            state.studentList.splice(findIndex, 1)
        })
    }
})


export const { initStudentList } = studentSlice.actions
export default studentSlice.reducer


