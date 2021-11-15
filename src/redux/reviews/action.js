import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import { GET_REVIEW, GET_REVIEWS } from 'redux/reviews/type';
import { getApi } from '../api';

export const fetchReview = createAsyncThunk(GET_REVIEW, async (params) => {
  const endpoint = `${API_URL}/api/review/${params.id}`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const fetchReviews = createAsyncThunk(GET_REVIEWS, async () => {
  const endpoint = `${API_URL}/api/reviews`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});
