import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: string | null;
  showLogin: boolean;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  showLogin: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    showLoginModal(state, action) {
      state.showLogin = action.payload;
    },
  },
});

export const { loginUser, logoutUser, showLoginModal } = authReducer.actions;
export default authReducer.reducer;
