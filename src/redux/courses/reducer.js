import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { fetchCourse, fetchCourses } from 'redux/courses/action';

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    item: {
      loading: false,
      result: {},
      error: {},
    },
    list: {
      loading: false,
      result: {},
      error: {},
    },
  },
  extraReducers: {
    [fetchCourse.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchCourse.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchCourse.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy khóa học.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },

    [fetchCourses.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy các khóa học.',
        className: 'app-message',
      });
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
});

export const course = (state) => state.course;

export default courseSlice.reducer;
