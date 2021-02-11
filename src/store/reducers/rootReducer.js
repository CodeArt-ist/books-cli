import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
});

export default rootReducer;