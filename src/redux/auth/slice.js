import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, refreshUser, registerUser } from "./operations";


const handlePending = (state) => {
    state.contacts.loading = true;
}

const handleReject = (state, action) =>{
    state.contacts.loading = false;
    state.contacts.error = action.payload
}

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, handlePending)
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerUser.rejected, handleReject)
            .addCase(logInUser.pending, handlePending)
            .addCase(logInUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logInUser.rejected, handleReject)
            .addCase(logOutUser.pending, handlePending)
            .addCase(logOutUser.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOutUser.rejected, handleReject)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
        })
        
        
    }
})

export const authReducer = authSlice.reducer;