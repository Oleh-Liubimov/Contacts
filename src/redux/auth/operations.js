import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

const setAuthHeader = (token) => axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const clearAuthHeader = () => axios.defaults.headers.common.Authorization = "";



export const registerUser = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post("users/signup", user);
            setAuthHeader(response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const logInUser = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", {
              email: user.email,
              password: user.password,
            });
            setAuthHeader(response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const  logOutUser = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            clearAuthHeader();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const presistedToken = state.auth.token;
        if (presistedToken === null) return thunkAPI.rejectWithValue("Unable to fetch user") 
            
        try {
            setAuthHeader(presistedToken);
            const response = await axios.get("/users/current");
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }

    }
)