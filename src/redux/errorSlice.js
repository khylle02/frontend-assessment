import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: false,
    reducers: {
        setError: (state, action) => {
            state = action.payload;
        }
    }
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;