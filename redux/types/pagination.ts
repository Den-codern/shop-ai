import { ProductsModel } from "../../interfaces/product.interface";

export interface PaginationState {
  currentItems: ProductsModel[];
  itemOffset: number;
  pageCount: number;
  itemsPerPage: number;
}

export enum PaginationActionType {
  UPDATE_PAGINATION = "UPDATE_PAGINATION",
  INIT_PAGINATION = "INIT_PAGINATION",
}

interface UpdatePagination {
  type: PaginationActionType.UPDATE_PAGINATION;
  payload: { selected: number; products: ProductsModel[] };
}

interface InitPagination {
  type: PaginationActionType.INIT_PAGINATION;
  payload: ProductsModel[];
}

export type PaginationAction = UpdatePagination | InitPagination;
