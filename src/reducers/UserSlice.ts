import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";
import axios from "axios";

export const initialState: User[] = [];

const BASE_URL =
  "https://67f74d0c42d6c71cca649e21.mockapi.io/api/v1/recipes/users";

export const registerUser = createAsyncThunk(
  "user/register",
  async (user: User) => {
    try {
      const response = await axios.post(BASE_URL, user);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const loginUser = createAsyncThunk("user/login", async (user: User) => {
  try {
    const response = await axios.post(BASE_URL, user);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.error("Failed to save User", action.payload);
      })
      .addCase(registerUser.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error("Failed to login user", action.error.message);
      })
      .addCase(loginUser.pending, (state) => {
        console.log("Logging in...");
      });
  },
});

export default userSlice.reducer;
