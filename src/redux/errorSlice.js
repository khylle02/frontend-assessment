import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        form: false,
    },
    reducers: {
        setFormError: (state, action) => {
            state.form = action.payload;
        },
        setNavError: (state, action) => {
            state.nav = action.payload;
        }
    }
});

export const { setFormError, setNavError } = errorSlice.actions;
export default errorSlice.reducer;