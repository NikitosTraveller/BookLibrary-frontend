import { RootState } from "../../../../store";

export const selectBooks = (state: RootState) => state.bookState.books;

export const getSelectedBook = (state: RootState) => state.bookState.selectedBook;