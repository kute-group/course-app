import { createSlice } from '@reduxjs/toolkit';
import { message, notification } from 'antd';

import { fetchReview, fetchReviews } from 'redux/reviews/action';

export const reviewSlice = createSlice({
  name: 'review',
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
    [fetchReview.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchReview.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchReview.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy bình luận.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchReviews.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchReviews.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
});

export const review = (state) => state.review;

export default reviewSlice.reducer;
