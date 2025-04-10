import { UserState } from '../interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action:PayloadAction<UserState>)=> {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        clearCredentials: (state)=> initialState,
    },
});

export const { setCredentials, clearCredentials } = userSlice.actions;
export default userSlice.reducer;