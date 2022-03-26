import { ModalAction, ModalActionTypes, ModalState } from "../types/modal";

const initialState = {
  openFormModal: false,
  openBasketModal: false,
};

export const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  let field = null;
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      field = action.payload;
      return { ...state, [`${field}`]: true };
    case ModalActionTypes.CLOSE_MODAL:
      field = action.payload;
      return { ...state, [`${field}`]: false };
    default:
      return state;
  }
};
