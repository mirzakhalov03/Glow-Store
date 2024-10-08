import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
type AuthData = {
  email?: string;
  password?: string;
  access_token?: string; // Added to store access token for Google login
  user?: any; // Store user data (for Google OAuth)
};

type AuthInitialState = {
  authdata: AuthData | null;
  googleAuthSessionUrl: string | null;
};

const initialState: AuthInitialState = {
  authdata: JSON.parse(localStorage.getItem("login") || "null"),
  googleAuthSessionUrl: localStorage.getItem("sessionUrl") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    login: (state, action: PayloadAction<AuthData>) => {
      const loginData = action.payload;
      state.authdata = loginData;
    const half = JSON.parse(localStorage.getItem("login") || "null");
    const base64Url = half?.split('.')[1];
    console.log(base64Url)
    const res = JSON.parse(atob(base64Url));
    console.log(res)


      localStorage.setItem("login", JSON.stringify(loginData)); // Store login data in localStorage
      if (loginData?.access_token) {
        localStorage.setItem("token", loginData.access_token); // Store access token for OAuth
      }
    },

    // Handle Google OAuth session
    setGoogleAuthSession: (state, action: PayloadAction<string>) => {
      const sessionUrl = action.payload;
      state.googleAuthSessionUrl = sessionUrl;
      localStorage.setItem("sessionUrl", sessionUrl);
    },

    // Optionally, handle logout
    logout: (state) => {
      state.authdata = null;
      state.googleAuthSessionUrl = null;
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      localStorage.removeItem("sessionUrl");
    },
  },
});

export const { login, setGoogleAuthSession, logout } = authSlice.actions;
export default authSlice.reducer;
