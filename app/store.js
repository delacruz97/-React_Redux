//me permite crear el store de mi aplicacion
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/user/userSlice";
import cartReducer from "../reducers/cart/cartSlice";

//el configureStore es una funcion que recibe un objeto y lo retorna
export default configureStore({
  reducer: {
    // reducer
    user: userReducer,
    cart: cartReducer,
  },
});
