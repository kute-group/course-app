import { createSlice } from '@reduxjs/toolkit';
import { message, notification } from 'antd';

import { fetchExercise, fetchExercises } from 'redux/exercises/action';

export const exerciseSlice = createSlice({
  name: 'exercise',
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
    [fetchExercise.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchExercise.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchExercise.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy bài tập.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchExercises.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchExercises.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchExercises.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
});

export const exercise = (state) => state.exercise;

export default exerciseSlice.reducer;
