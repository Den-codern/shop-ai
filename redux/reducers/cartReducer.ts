import { Reducer } from "redux";
import { CartAction, CartActionType, CartState } from "../types/cart";

const initialState = {
  cartItems: [],
  loading: false,
};

export const cartReducer: Reducer<CartState, CartAction> = (
  state = initialState,
  action: CartAction
): CartState => {
  let findIdx = null;
  let cart = null;
  switch (action.type) {
    case CartActionType.ADD_ITEMS:
      cart = state.cartItems;

      findIdx = cart.findIndex((el) => el._id == action.payload._id);
      if (findIdx == -1) {
        cart.push(action.payload);
      } else {
        cart[findIdx].count++;
      }
      return {
        ...state,
        cartItems: cart,
      };
    case CartActionType.REMOVE_ITEM:
      cart = [...state.cartItems];
      findIdx = cart.findIndex((item) => item._id == action.payload);
      cart.splice(findIdx, 1);
      return { ...state, cartItems: cart };
    case CartActionType.REMOVE_ALL:
      return { ...state, cartItems: [] };
    case CartActionType.INCREMENT_COUNT:
      cart = [...state.cartItems];
      findIdx = cart.findIndex((item) => item._id == action.payload);
      cart[findIdx].count++;

      return { ...state, cartItems: cart };
    case CartActionType.DECREMENT_COUNT:
      cart = [...state.cartItems];
      findIdx = cart.findIndex((item) => item._id == action.payload);

      if (cart[findIdx].count < 2) {
        cart.splice(findIdx, 1);
      } else {
        cart[findIdx].count--;
      }
      return { ...state, cartItems: cart };
    case CartActionType.FETCH_PRODUCTS_BEGIN:
      return { ...state, loading: true };
    case CartActionType.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, cartItems: action.payload };
    default:
      return { ...state };
  }
};
