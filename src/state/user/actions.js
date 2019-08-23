import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from "./actionTypes";

export const fetchUser = () => ({ type: FETCH_USER });

export const fetchUserSuccess = user => {
  return { type: FETCH_USER_SUCCESS, payload: { user } };
};

export const fetchUserFailed = error => ({
  type: FETCH_USER_FAILED,
  payload: { error }
});
