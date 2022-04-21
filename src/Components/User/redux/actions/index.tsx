import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../../../appconfig";
import { UserModel } from "../../../../Models/UserModel";

export const getUserAsync = createAsyncThunk(
    'userSlice/getUser',
    async () => {
        const response = await axios.get(apiUrl + 'user/user')
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const logoutUserAsync = createAsyncThunk(
    'userSlice/logoutUser',
    async () => {
        const response = await axios.post(apiUrl + "user/logout")
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const loginUserAsync = createAsyncThunk(
    'userSlice/loginUser',
    async (userModel: UserModel) => {
        const response = await axios.post(apiUrl + "user/login", {
            password: userModel.password,
            username: userModel.username
        })
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const registerUserAsync = createAsyncThunk(
    'userSlice/registerUser',
    async (userModel: UserModel) => {
        const response = await axios.post(apiUrl + "user/register", {
            password: userModel.password,
            firstName: userModel.firstName,
            lastName: userModel.lastName,
            username: userModel.username
        })
        return response['data'];
    }
  );
