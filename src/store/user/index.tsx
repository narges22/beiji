import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface stateType {
  user: IUser | undefined;
}

const initialState: stateType = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    RemoveUSer: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, RemoveUSer } = userSlice.actions;

export default userSlice.reducer;
