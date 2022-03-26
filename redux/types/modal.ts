export interface ModalState {
  openFormModal: boolean;
  openBasketModal: boolean;
}

export enum ModalActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

interface OpenModal {
  type: ModalActionTypes.OPEN_MODAL;
  payload: string;
}

interface CloseModal {
  type: ModalActionTypes.CLOSE_MODAL;
  payload: string;
}

export type ModalAction = OpenModal | CloseModal;
