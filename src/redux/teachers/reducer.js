import { createSlice } from '@reduxjs/toolkit';
import { message, notification } from 'antd';

import { fetchTeacher, fetchTeachers } from 'redux/teachers/action';

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    list: {
      loading: false,
      result: {},
      error: {},
    },
    item: {
      loading: false,
      result: {},
      error: {},
    },
  },
  extraReducers: {
    [fetchTeacher.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchTeacher.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchTeacher.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy giáo viên.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchTeachers.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
});

export const teacher = (state) => state.teacher;

export default teacherSlice.reducer;
