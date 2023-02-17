import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
        state.push(action.payload);
        },
    editUser: (state, action) => {
        const { id, firstname, middleInitial, lastName, email, password, birthday, age } = action.payload;
        const existingUser = state.find(user => user.id === id);
    if(existingUser) {
        existingUser.firstname = firstname;
        existingUser.middleInitial = middleInitial;
        existingUser.lastName = lastName;
        existingUser.email = email;
        existingUser.password = password;
        existingUser.birthday = birthday;
        existingUser.age = age;
    }
    },
    deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser) {
        return state.filter(user => user.id !== id);
        }
    }
    }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;