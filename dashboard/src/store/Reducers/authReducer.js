import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const adminLogin = createAsyncThunk("auth/adminLogin", async (info) => {
  console.log(info);
  try {
    const { data } = await api.post("/admin-login", info, {
      withCredentials: true,
    });
    console.log(data);
  } catch (error) {}
});

const initialState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  userInfo: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducer: {},
});

export default authReducer.reducer;
