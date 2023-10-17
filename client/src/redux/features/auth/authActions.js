import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role, email, password}, {rejectWithValue}) => {
        try {
            const {data} = await api.post('/auth/login',{role,email,password})

            // store token
            if(data.success) {
                localStorage.setItem('token', data.token)
                toast.success(data.message)
            }
            return data
        } catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)