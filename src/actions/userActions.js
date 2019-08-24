export const SET_USER_INFO = "SET_USER_INFO";

export function setUserInfo(accessToken, userName, userPicture) {
  return {
    type: SET_USER_INFO,
    payload: { accessToken, userName, userPicture }
  };
}
