import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./users/userSlice"
import errorReducer from "./errorSlice"

export const store = configureStore({
    reducer: {
        users: userReducer,
        error: errorReducer,
    },
})