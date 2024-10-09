import { getLocalStorageItemWithExpiry, setLocalStorageItemWithExpiry } from "@/lib/local_storage";
import { createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  auth: boolean;
};

const date = new Date()

const verify = getLocalStorageItemWithExpiry('auth')

const initialState: AuthStateType = {
  auth: verify || false ,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setVerifyAuth: (state, { payload }) => {
      state.auth = payload;
      setLocalStorageItemWithExpiry('auth',payload,1)
    },
  },
});

export const { setVerifyAuth } = authSlice.actions;

export default authSlice.reducer;
