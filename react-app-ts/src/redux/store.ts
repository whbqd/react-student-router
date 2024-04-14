import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from './todoSlice'
import studentReducer from "./studentSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
    reducer: {
        todo: todoSliceReducer,
        student: studentReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
