import { CartModel } from "../../interfaces/cart.interface";

export interface CartItem {
  _id: string;
  image: string;
  count: number;
  price: number;
  name: string;
}

export interface CartState {
  cartItems: CartItem[];
  loading: boolean;
}

export enum CartActionType {
  ADD_ITEMS = "ADD_ITEMS",
  REMOVE_ITEM = "REMOVE_ITEM",
  REMOVE_ALL = "REMOVE_ALL",
  INCREMENT_COUNT = "INCREMENT_COUNT",
  DECREMENT_COUNT = "DECREMENT_COUNT ",
  FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
}

interface AddItems {
  type: CartActionType.ADD_ITEMS;
  payload: CartItem;
}

interface RemoveItem {
  type: CartActionType.REMOVE_ITEM;
  payload: string;
}

interface RemoveAll {
  type: CartActionType.REMOVE_ALL;
}

interface IncrementCount {
  type: CartActionType.INCREMENT_COUNT;
  payload: string;
}

interface DecrementCount {
  type: CartActionType.DECREMENT_COUNT;
  payload: string;
}

interface FetchProductsBegin {
  type: CartActionType.FETCH_PRODUCTS_BEGIN;
}

interface FetchProductsSuccess {
  type: CartActionType.FETCH_PRODUCTS_SUCCESS;
  payload: CartItem[];
}

export type CartAction =
  | AddItems
  | RemoveItem
  | RemoveAll
  | IncrementCount
  | DecrementCount
  | FetchProductsBegin
  | FetchProductsSuccess;
