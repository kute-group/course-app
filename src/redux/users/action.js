import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'configs';
import {
  GET_USER,
  GET_USERS,
  LOGIN,
  LOGOUT,
  FORGOT_PASSWORD,
  REGISTER,
  EDIT_USER,
  VERIFY,
} from 'redux/users/type';
import { getApi, postApi, putApi } from '../api';
import { useSelector, useDispatch } from 'react-redux';

export const fetchUser = createAsyncThunk(GET_USER, async (params) => {
  const endpoint = `${API_URL}/api/user/${params.id}`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const fetchUsers = createAsyncThunk(GET_USERS, async () => {
  const endpoint = `${API_URL}/api/users`;
  const response = await getApi(endpoint);
  const data = response.data;
  return data;
});

export const doLogin = createAsyncThunk(LOGIN, async (params) => {
  const endpoint = `${API_URL}/api/user/login`;
  const response = await postApi(endpoint, params);
  const data = response.data;
  localStorage.setItem('userToken', data.token);
  localStorage.setItem('userInfo', JSON.stringify(data.user));
  if (params.callback) {
    params.callback(data);
  }
  return data;
});

export const doLogout = createAsyncThunk(LOGOUT, async (params) => {
  const endpoint = `${API_URL}/api/user/logout-all`;
  const response = await postApi(endpoint, params);
  const data = response.data;

  localStorage.removeItem('userToken');
  localStorage.removeItem('userInfo');
  if (params.callback) {
    params.callback(data);
  }
  return data;
});

export const doRegister = createAsyncThunk(REGISTER, async (params) => {
  const endpoint = `${API_URL}/api/user`;
  const response = await postApi(endpoint, params);
  const data = response.data;
  if (params.callback) {
    params.callback(data);
  }
  return data;
});
export const doForgotPassword = createAsyncThunk(
  FORGOT_PASSWORD,
  async (params) => {
    const endpoint = `${API_URL}/api/user/forgot-password`;
    const response = await postApi(endpoint, params);
    const data = response.data;
    if (params.callback) {
      params.callback(data);
    }
    return data;
  }
);

export const doEditUser = createAsyncThunk(EDIT_USER, async (params) => {
  const endpoint = `${API_URL}/api/user/${params._id}`;
  const response = await putApi(endpoint, params);
  const data = response.data;
  if (params.callback) {
    params.callback(data);
  }
  return data;
});

export const doVerify = createAsyncThunk(VERIFY, async (params) => {
  const endpoint = `${API_URL}/api/user-confirmation/${params.id}`;
  const response = await putApi(endpoint, params);
  const data = response.data;
  if (params.callback) {
    params.callback(data);
  }
  return data;
});
