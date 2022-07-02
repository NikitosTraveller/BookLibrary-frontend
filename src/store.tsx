import { configureStore } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import booksReducer from './components/book/redux/reducers';
import commentsReducer from './components/comment/redux/reducers';
import userReducer from './components/user/redux/reducers';

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