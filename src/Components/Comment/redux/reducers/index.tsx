import { Comment } from "../../../../models/comment";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCommentAsync, deleteCommentAsync, getCommentsAsync } from "../actions";
import { initialState } from "../state";
  
  export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder

        .addCase(getCommentsAsync.pending, (state) => {
          state.comments = [];
        })
        .addCase(getCommentsAsync.fulfilled, (state, action: PayloadAction<Comment[]>) => {
          state.comments = action.payload;
        })

        .addCase(createCommentAsync.fulfilled, (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        })

        .addCase(deleteCommentAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(com => com.id != action.payload);
        })
    },
  });
  
  export default commentSlice.reducer;

  


  