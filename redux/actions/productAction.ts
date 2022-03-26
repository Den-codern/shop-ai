import axios from "axios";
import { CartActionType, CartItem } from "../types/cart";
import cookies from "js-cookie";

export async function fetchProducts(
  dispatch: (arg0: { type: CartActionType; payload?: CartItem[] }) => void
) {
  const token = `${cookies.get("token")}`;
  dispatch(fetchProductsBegin());
  const { data } = await axios.get(
    `http://localhost:${process.env.PORT}/api/cart/getProducts`,
    {
      headers: { Authorization: token },
    }
  );
  return dispatch(fetchProductsSuccess(data));
}

export const fetchProductsBegin = () => ({
  type: CartActionType.FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (product: CartItem[]) => ({
  type: CartActionType.FETCH_PRODUCTS_SUCCESS,
  payload: product,
});
