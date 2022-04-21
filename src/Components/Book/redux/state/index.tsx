import { Book } from "../../../../Models/Book";

export interface BookState {
    books: Book[];
    selectedBook: Book;
  }
  
export const initialState = {
    books: [],
    selectedBook: null
  } as BookState;