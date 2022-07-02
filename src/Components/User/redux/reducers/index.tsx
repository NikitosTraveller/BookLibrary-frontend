import { User } from "../../../../models/user";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from "../state";
import { getUserAsync, loginUserAsync, logoutUserAsync, registerUserAsync } from "../actions";
   
  export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder

      .addCase(getUserAsync.pending, (state) => {
        state.user = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })

      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.user = null;
        state.loginRedirect = false;
      })

      .addCase(loginUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })

      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loginRedirect = true;
      })
    },
  });
  
  export const {  } = userSlice.actions;
  
  export default userSlice.reducer;

  
  