import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import { GET_EXERCISE, GET_EXERCISES } from 'redux/exercises/type';
import { getApi } from '../api';

export const fetchExercise = createAsyncThunk(GET_EXERCISE, async (params) => {
  const endpoint = `${API_URL}/api/exercise/${params.id}`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const fetchExercises = createAsyncThunk(GET_EXERCISES, async () => {
  const endpoint = `${API_URL}/api/exercises`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});
