import axios from 'axios';
import Cookies from 'js-cookie';
import { 
  TOP_ALERT,
  AUTH_LOADING,
  AUTH_LOADED
} from "./types";


export const loginUser = (email: string, password: string) => (dispatch: Function) => { 
  dispatch(setAuthLoading(true));
  axios
    .post('/auth/local', {email, password})
    .then(res => {
      if(res.data) {
        if(res.data.isSuccess) {
          if(res.data.res.user && res.data.res.token && res.data.res.tokenExpiry) {
            Cookies.set("sessionToken", res.data.res.token)
            Cookies.set("sessionTokenExpiry", res.data.res.tokenExpiry)
            dispatch({
              type: AUTH_LOADED,
              payload: res.data.res
            });
          }
        } else {
          dispatch(setAuthLoading(false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.res, type: "danger" }
          });
        }
      } else {
        dispatch(setAuthLoading(false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: "Email or password is invalid", type: "danger" }
        });
      }
    })
    .catch(err => {
      dispatch(setAuthLoading(false));
      dispatch({
        type: TOP_ALERT,
        payload: { showAlert: true, message: err.message, type: "danger" }
      });
    });
};

export const verifyToken = (token: string) => (dispatch: Function) => { 
  dispatch(setAuthLoading(true));
  if(token) {
    axios
      .post('/auth/local/verify', {token})
      .then(res => {
        if(res.data.isSuccess) {
          if(res.data.res) {
            dispatch({
              type: AUTH_LOADED,
              payload: res.data.res
            });
          } else {
            dispatch(setAuthLoading(false));
            dispatch({
              type: TOP_ALERT,
              payload: { showAlert: true, message: res.data.res, type: "danger" }
            });
          }
        } else {
          dispatch(setAuthLoading(false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.res, type: "danger" }
          });
        }
      })
      .catch(err => {
        dispatch(setAuthLoading(false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      });
  } else {
    dispatch(setAuthLoading(false));
    dispatch({
      type: AUTH_LOADED,
      payload: { user: null, otherInfo: null },
    });
    dispatch({
      type: TOP_ALERT,
      payload: { showAlert: true, message: "Token is expired, please login to continue", type: "danger" }
    });
  }
};

export const emptyAuth = () => (
  dispatch: Function
) => {
  return dispatch({
    type: AUTH_LOADED,
    payload: { user: null, otherInfo: null },
  });
}

export const setAuthLoading = (isShow: boolean) => {
  return {
    type: AUTH_LOADING,
    payload: isShow
  };
};