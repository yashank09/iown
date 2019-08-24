import { SET_USER_INFO } from "../actions/userActions";

const initialState = { isUserLogged: false };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        isUserLogged: true,
        accessToken: action.payload.accessToken,
        userName: action.payload.userName,
        userPicture: action.payload.userPicture
      };
    default:
      return state;
  }
};
