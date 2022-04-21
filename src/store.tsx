import { configureStore } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import booksReducer from '../src/Components/Book/redux/reducers';
import commentsReducer from '../src/Components/Comment/redux/reducers';
import userReducer from '../src/Components/User/redux/reducers';

export const store = configureStore({
  reducer: {
    bookState: booksReducer,
    commentState: commentsReducer,
    userState: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;