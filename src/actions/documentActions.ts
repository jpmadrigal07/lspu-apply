import axios from "axios";
import { 
    GET_DOCUMENT,
    ADD_DOCUMENT,
    DELETE_DOCUMENT,
    UPDATE_DOCUMENT,
    TOP_ALERT,
    DOCUMENT_LOADER
} from "./types";

export const getDocument = () => (dispatch: Function) => {
  dispatch(setDocumentLoader("list", true));
  axios
    .get(`/api/document`)
    .then((res) => {
        dispatch({
          type: GET_DOCUMENT,
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

export const addDocument = (
    fileName: string,
    isApplyToAllCourse: boolean,
    applyToCourses: string,
    isApplyToAllAdmitType: boolean,
    applyToAdmitTypes: string,
    isEnrolleeRequiredToUpload: boolean,
    isDocumentEnabled: boolean,
  ) => (dispatch: Function) => {
    dispatch(setDocumentLoader("add", true));
    axios
      .post(`/api/document`, { 
        fileName,
        isApplyToAllCourse,
        applyToCourses,
        isApplyToAllAdmitType,
        applyToAdmitTypes,
        isEnrolleeRequiredToUpload,
        isDocumentEnabled
      })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_DOCUMENT,
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
          dispatch(setDocumentLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setDocumentLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteDocument = (id: string) => (dispatch: Function) => {
    dispatch(setDocumentLoader("delete", true));
    axios
      .delete(`/api/document/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_DOCUMENT,
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
          dispatch(setDocumentLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setDocumentLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateDocument = (
  id: String, 
  fileName: string,
  isApplyToAllCourse: boolean,
  applyToCourses: string,
  isApplyToAllAdmitType: boolean,
  applyToAdmitTypes: string,
  isEnrolleeRequiredToUpload: boolean,
  isDocumentEnabled: boolean
  ) => (
  dispatch: Function
) => {
  dispatch(setDocumentLoader("update", true));
  axios
    .patch(`/api/document/${id}`, { 
      fileName, 
      isApplyToAllCourse,
      applyToCourses,
      isApplyToAllAdmitType,
      applyToAdmitTypes,
      isEnrolleeRequiredToUpload,
      isDocumentEnabled
    })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_DOCUMENT,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setDocumentLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setDocumentLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setDocumentLoader = (type: string, isLoading: boolean) => {
  return {
    type: DOCUMENT_LOADER,
    payload: { type, isLoading }
  };
};