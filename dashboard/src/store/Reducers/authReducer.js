import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// admin Login
export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// create seller
export const sellerRegister = createAsyncThunk(
  "auth/sellerRegister",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// seller login
//
export const sellerLogin = createAsyncThunk(
  "auth/sellerLogin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("seller-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
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
    // seller register
    [sellerRegister.pending]: (state) => {
      state.loader = true;
    },
    [sellerRegister.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [sellerRegister.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      // state.role = returnRole(payload.token);
    },

    // seller Login
    [sellerLogin.pending]: (state) => {
      state.loader = true;
    },
    [sellerLogin.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [sellerLogin.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
  },
});

export const { messageClear } = authReducer.actions;

export default authReducer.reducer;
