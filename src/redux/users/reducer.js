import { createSlice } from '@reduxjs/toolkit';
import { message, notification } from 'antd';

import {
  fetchUser,
  fetchUsers,
  doLogin,
  doLogout,
  doRegister,
  doForgotPassword,
  doEditUser,
  doVerify,
} from 'redux/users/action';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      loading: false,
      result: {},
      error: undefined,
    },
    logout: {
      loading: false,
      result: {},
      error: undefined,
    },
    register: {
      loading: false,
      result: {},
      error: undefined,
    },
    forgotpassword: {
      loading: false,
      result: {},
      error: undefined,
    },
    edituser: {
      loading: false,
      result: {},
      error: undefined,
    },
    verify: {
      loading: false,
      result: {},
      error: undefined,
    },

    list: {
      loading: false,
      result: {},
      error: undefined,
    },
    item: {
      loading: false,
      result: {},
      error: undefined,
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy tài khoản.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchUsers.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      state.list.loading = false;
      state.list.error = action.error;
    },

    // do login
    [doLogin.pending]: (state, action) => {
      state.login.loading = true;
    },
    [doLogin.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.result = action.payload;
      message.success({
        content: 'Đăng nhập thành công',
        className: 'app-message',
      });
    },
    [doLogin.rejected]: (state, action) => {
      console.error('========> Error: ', action);
      message.error({
        content: 'Đăng nhập thất bại',
        className: 'app-message',
      });
      state.login.loading = false;
      state.login.error = action.error;
    },

    // do logout
    [doLogout.pending]: (state, action) => {
      state.logout.loading = true;
    },
    [doLogout.fulfilled]: (state, action) => {
      state.logout.loading = false;
      state.logout.result = action.payload;
    },
    [doLogout.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      localStorage.removeItem('userToken');
      localStorage.removeItem('userInfo');
      state.logout.loading = false;
      state.logout.error = action.error;
    },

    // do Register
    [doRegister.pending]: (state, action) => {
      state.register.loading = true;
    },
    [doRegister.fulfilled]: (state, action) => {
      state.register.loading = false;
      state.register.result = action.payload;
      message.success({
        content: 'Đăng ký thành công .',
        className: 'app-message',
      });
    },
    [doRegister.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Đăng ký thất bại .',
        className: 'app-message',
      });
      state.register.loading = false;
      state.register.error = action.error;
    },

    // do forgotpassword
    [doForgotPassword.pending]: (state, action) => {
      state.forgotpassword.loading = true;
    },
    [doForgotPassword.fulfilled]: (state, action) => {
      state.forgotpassword.loading = false;
      state.forgotpassword.result = action.payload;
      message.success({
        content: 'lấy mật khẩu thành công .',
        className: 'app-message',
      });
    },
    [doForgotPassword.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'lấy mật khẩu thất bại .',
        className: 'app-message',
      });
      state.forgotpassword.loading = false;
      state.forgotpassword.error = action.error;
    },
    // do edituser
    [doEditUser.pending]: (state, action) => {
      state.edituser.loading = true;
    },
    [doEditUser.fulfilled]: (state, action) => {
      state.edituser.loading = false;
      state.edituser.result = action.payload;
      message.success({
        content: 'cập nhật thành công .',
        className: 'app-message',
      });
    },
    [doEditUser.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'cập nhật thất bại .',
        className: 'app-message',
      });
      state.edituser.loading = false;
      state.edituser.error = action.error;
    },
    // do verify
    [doVerify.pending]: (state, action) => {
      state.verify.loading = true;
    },
    [doVerify.fulfilled]: (state, action) => {
      state.verify.loading = false;
      state.verify.result = action.payload;
      message.success({
        content: 'cập nhật thành công .',
        className: 'app-message',
      });
    },
    [doVerify.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'cập nhật thất bại .',
        className: 'app-message',
      });
      state.verify.loading = false;
      state.verify.error = action.error;
    },
  },
});

export const user = (state) => state.user;

export default userSlice.reducer;
