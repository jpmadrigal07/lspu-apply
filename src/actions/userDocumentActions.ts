import axios from "axios";
import { 
    GET_USER_DOCUMENT,
    ADD_USER_DOCUMENT,
    DELETE_USER_DOCUMENT,
    UPDATE_USER_DOCUMENT,
    TOP_ALERT,
    USER_DOCUMENT_LOADER
} from "./types";

export const getUserDocument = (userId: string) => (dispatch: Function) => {
  dispatch(setUserDocumentLoader("list", true));
  axios
    .get(`/api/userDocument?userId?${userId}`)
    .then((res) => {
        dispatch({
          type: GET_USER_DOCUMENT,
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

export const addUserDocument = (
    documentId: string,
    documentPath: string,
    userId: string
  ) => (dispatch: Function) => {
    dispatch(setUserDocumentLoader("add", true));
    axios
      .post(`/api/userDocument`, { documentId, documentPath, userId })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_USER_DOCUMENT,
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
          dispatch(setUserDocumentLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setUserDocumentLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteUserDocument = (id: string) => (dispatch: Function) => {
    dispatch(setUserDocumentLoader("delete", true));
    axios
      .delete(`/api/UserDocument/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_USER_DOCUMENT,
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
          dispatch(setUserDocumentLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setUserDocumentLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateUserDocument = (id: String, documentId: string, documentPath: string, userId: string) => (
  dispatch: Function
) => {
  dispatch(setUserDocumentLoader("update", true));
  axios
    .patch(`/api/UserDocument/${id}`, { documentId, documentPath, userId })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_USER_DOCUMENT,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setUserDocumentLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setUserDocumentLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setUserDocument = (data: any, type: string) => {
  return {
    type: type === "add" ? ADD_USER_DOCUMENT : UPDATE_USER_DOCUMENT,
    payload: data !== "" ? data : {},
  };
};

export const setUserDocumentLoader = (type: string, isLoading: boolean) => {
  return {
    type: USER_DOCUMENT_LOADER,
    payload: { type, isLoading }
  };
};