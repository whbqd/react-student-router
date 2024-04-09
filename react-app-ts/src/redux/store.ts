import { configureStore } from '@reduxjs/toolkit'
import todoSliceReducer from './todoSlice'
import studentReducer from "./studentSlice";

export default configureStore({
    reducer: {
        todo: todoSliceReducer,
        student: studentReducer
    }
})
