import { createSlice } from '@reduxjs/toolkit';
import { message, notification } from 'antd';

import { fetchPost, fetchPosts } from 'redux/posts/action';

export const postSlice = createSlice({
  name: 'post',
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
    [fetchPost.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy bài viết.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchPosts.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      state.list.loading = false;
      state.list.error = action.error;
    },
  },
});

export const post = (state) => state.post;

export default postSlice.reducer;
