import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../../../appconfig";
import { CommentModel } from "../../../../models/commentModel";

export const getCommentsAsync = createAsyncThunk(
    'commentSlice/getComments',
    async (bookId: number) => {
        const response = await axios.get(apiUrl + 'comment/comments/' + bookId)
        .catch(err => {
            console.log(err);
        });
        return response['data'];
    }
  );

  export const createCommentAsync = createAsyncThunk(
    'commentSlice/createComment',
    async (comment: CommentModel) => {
        const response = await axios.post(apiUrl + "comment/post", {
            message : comment.message,
            bookId: comment.bookId
        })
        return response['data'];
    }
  );

  export const deleteCommentAsync = createAsyncThunk(
    'commentSlice/deleteComment',
    async (commentId: number) => {
        const response = await await axios.delete(apiUrl + "comment/delete/" + commentId);
        return response['data'];
    }
  );