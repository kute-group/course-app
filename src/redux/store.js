import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import reducers
import courseReducer from './courses/reducer';
import postReducer from './posts/reducer';
import teacherReducer from './teachers/reducer';
import reviewReducer from './reviews/reducer';
import userReducer from './users/reducer';

const reducer = {
  course: courseReducer,
  post: postReducer,
  review: teacherReducer,
  teacher: reviewReducer,
  user: userReducer,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
