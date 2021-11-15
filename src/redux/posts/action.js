import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import { GET_POST, GET_POSTS } from 'redux/posts/type';
import { getApi } from '../api';

export const fetchPost = createAsyncThunk(GET_POST, async (params) => {
  const endpoint = `${API_URL}/api/post/${params.id}`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const fetchPosts = createAsyncThunk(GET_POSTS, async () => {
  const endpoint = `${API_URL}/api/posts`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});
