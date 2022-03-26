import { UserAction, UserActionType, UserState } from "../types/user";

const initialState = {
  userId: "",
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return { ...state };
  }
};


