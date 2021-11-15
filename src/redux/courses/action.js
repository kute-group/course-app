import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, UNI_COURSE_API } from 'configs';
import { GET_COURSE, GET_COURSES } from 'redux/courses/type';
import { getApi } from '../api';
import { convertToSlug } from 'helpers/common';
const authPath = '&token=TuFDvt4LlAypfG8buBCWRg&aff_id=284040';

export const fetchCourse = createAsyncThunk(GET_COURSE, async (params) => {
  const endpoint = `${UNI_COURSE_API}/api/getCourse?id=${params.id}${authPath}`;
  const response = await getApi(endpoint);
  const data = await response.data;
  return data;
});

export const fetchCourses = createAsyncThunk(
  GET_COURSES,
  async ({ page = 1, tag_id, category_id }) => {
    let endpoint = `${UNI_COURSE_API}/api/`;
    if (tag_id) {
      endpoint += `coursecategory?tag_id=${tag_id}`;
    } else if (category_id) {
      endpoint += `coursecategory?category_id=${category_id}`;
    } else {
      endpoint += `courses?active=true`;
    }
    endpoint += `&page=${page}`;
    endpoint += authPath;
    const response = await getApi(endpoint);
    const data = await response.data;
    return data;
  }
);
