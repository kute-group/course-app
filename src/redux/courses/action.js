import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import { GET_COURSE, GET_COURSES } from 'redux/courses/type';
import { getApi } from '../api';
import { convertToSlug } from 'helpers/common';

export const fetchCourse = createAsyncThunk(GET_COURSE, async (params) => {
  const endpoint = `${API_URL}/api/course/${params.id}`;
  const response = await getApi(endpoint);
  const data = await response.data;
  return data;
});

export const fetchCourses = createAsyncThunk(GET_COURSES, async () => {
  const endpoint = `${API_URL}/api/courses`;
  const response = await getApi(endpoint);
  const data = await response.data;
  return data;
});
