import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/users"

const setAuthHeader = (token) => axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const clearAuthHeader = () => axios.defaults.headers.common.Authorization = "";



export const registerUser = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post("/signup", {
                name: user.name,
                number: user.number,
                password: user.password
            });
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
            const response = await axios.post("/login", {
                email: user.email,
                password: user.password
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
            await axios.post("/logout");
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
            const response = await axios.get("/current")
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }

    }
)