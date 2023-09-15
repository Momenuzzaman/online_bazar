import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  userInfo: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    messageClear: (state) => {
      (state.errorMessage = ""), (state.successMessage = "");
    },
  },
  extraReducers: {
    [adminLogin.pending]: (state) => {
      state.loader = true;
    },
    [adminLogin.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [adminLogin.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
  },
});

export const { messageClear } = authReducer.actions;

export default authReducer.reducer;
