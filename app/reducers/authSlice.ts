import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserState } from '../interfaces';


const initialState: AuthState = {
  isAuthenticated: false,
  isRegistering: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registering: (state, action: PayloadAction<boolean>) => {
      state.isRegistering = action.payload;
    },
    register: (state, action: PayloadAction<UserState>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    login: (state, action: PayloadAction<UserState>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { register, registering, login, logout } = authSlice.actions;
export default authSlice.reducer;
