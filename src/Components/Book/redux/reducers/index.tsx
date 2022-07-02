import { Book } from "../../../../models/Book";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooksAsync, getBookAsync, uploadBookAsync, deleteBookAsync, downloadBookAsync } from "../actions";
import { initialState } from "../state";
   
  export const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder

        .addCase(getBooksAsync.pending, (state) => {
          state.books = [];
        })
        .addCase(getBooksAsync.fulfilled, (state, action: PayloadAction<Book[]>) => {
          state.books = action.payload;
        })

        .addCase(getBookAsync.pending, (state) => {
          state.selectedBook = null;
        })
        .addCase(getBookAsync.fulfilled, (state, action: PayloadAction<Book>) => {
          state.selectedBook = action.payload;
        })

        .addCase(uploadBookAsync.fulfilled, (state, action: PayloadAction<Book>) => {
          state.books.push(action.payload);    
        })

        .addCase(deleteBookAsync.fulfilled, (state, action: PayloadAction<number>) => {
          state.books= state.books.filter(book => book.id != action.payload);
        })

        .addCase(downloadBookAsync.fulfilled, (state, action: PayloadAction<Book[]>) => {
          
        });
    },
  });
  
  export const {  } = bookSlice.actions;
  
  export default bookSlice.reducer;

  