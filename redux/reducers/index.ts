import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { modalReducer } from "./modalReducer";
import { paginationReducer } from "./paginationReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  pagination: paginationReducer,
  modal: modalReducer,
  cart: cartReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
