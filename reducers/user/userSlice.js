import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fullName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //el setUser es una funcion que recibe un objeto y lo retorna
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    //
    unsetUser: (state) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    },
  },
});

//acciones para el reducer
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
