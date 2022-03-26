export interface UserState {
  userId: string;
}

export enum UserActionType {
  SET_USER_ID = "SET_USER_ID",
}

interface SetUserId {
  type: UserActionType.SET_USER_ID;
  payload: string;
}

export type UserAction = SetUserId;
