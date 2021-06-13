import axios from "axios";
import { 
    GET_USER,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    TOP_ALERT,
    USER_LOADER
} from "./types";

export const getUser = () => (dispatch: Function) => {
  dispatch(setUserLoader("list", true));
  axios
    .get(`/api/user`)
    .then((res) => {
        dispatch({
          type: GET_USER,
          payload:
            res.data !== "" ? res.data : {},
        })
      }
    )
    .catch((err) => {
      dispatch({
        payload: { showAlert: true, message: err.message, type: "danger" }
      });
    });
};

export const addUser = (
    email: string,
    password: string,
    userType: string,
  ) => (dispatch: Function) => {
    dispatch(setUserLoader("add", true));
    axios
      .post(`/api/user`, { email: 'admin', password: 'admin123', userType: 'Admin' })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_USER,
            payload: res.data !== "" ? res.data : {},
          });
          dispatch({
            type: TOP_ALERT,
            payload: {
              showAlert: true,
              message: "Successfully added",
              type: "success",
            },
          });
        } else {
          dispatch(setUserLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setUserLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteUser = (id: string) => (dispatch: Function) => {
    dispatch(setUserLoader("delete", true));
    axios
      .delete(`/api/user/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_USER,
            payload: res.data.dbRes,
          });
          dispatch({
            payload: {
              showAlert: true,
              message: "Successfully deleted",
              type: "success",
            },
          });
        } else {
          dispatch(setUserLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setUserLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateUser = (id: String, email: string, password: string, userType: string) => (
  dispatch: Function
) => {
  dispatch(setUserLoader("update", true));
  axios
    .patch(`/api/user/${id}`, { email, password, userType })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_USER,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setUserLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setUserLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setUserLoader = (type: string, isLoading: boolean) => {
  return {
    type: USER_LOADER,
    payload: { type, isLoading }
  };
};