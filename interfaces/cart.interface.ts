import { CartItem } from "../redux/types/cart";

export interface CartModel {
  _id: string;
  user: string;
  carts: CartItem[];
}
