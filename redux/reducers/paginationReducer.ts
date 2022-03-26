import { Reducer } from "redux";
import {
  PaginationAction,
  PaginationActionType,
  PaginationState,
} from "../types/pagination";

const initialState = {
  currentItems: [],
  itemOffset: 0,
  pageCount: 0,
  itemsPerPage: 3,
};

export const paginationReducer: Reducer<PaginationState, PaginationAction> = (
  state = initialState,
  action: PaginationAction
): PaginationState => {
  switch (action.type) {
    case PaginationActionType.INIT_PAGINATION:
      return {
        ...state,
        pageCount: Math.ceil(action.payload.length / state.itemsPerPage),
        currentItems: action.payload.slice(
          state.itemOffset,
          state.itemOffset + (state.itemOffset + state.itemsPerPage)
        ),
      };
    case PaginationActionType.UPDATE_PAGINATION:
      const newItemOffset = action.payload.selected * state.itemsPerPage;

      const endOffset = newItemOffset + state.itemsPerPage;

      return {
        ...state,
        currentItems: action.payload.products.slice(newItemOffset, endOffset),
      };
    default:
      return state;
  }
};
