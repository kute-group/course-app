import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import { GET_TEACHER, GET_TEACHERS } from 'redux/teachers/type';
import { getApi } from '../api';

export const fetchTeacher = createAsyncThunk(GET_TEACHER, async (params) => {
  const endpoint = `${API_URL}/api/teacher/${params.id}`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const fetchTeachers = createAsyncThunk(GET_TEACHERS, async () => {
  const endpoint = `${API_URL}/api/teachers`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});
