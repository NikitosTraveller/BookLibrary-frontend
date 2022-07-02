import { Book } from "../../../../models/book";

export interface BookState {
    books: Book[];
    selectedBook: Book;
  }
  
export const initialState = {
    books: [],
    selectedBook: null
  } as BookState;