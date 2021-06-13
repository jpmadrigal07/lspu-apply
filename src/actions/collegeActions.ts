import axios from "axios";
import { 
  GET_COLLEGE,
  ADD_COLLEGE,
  DELETE_COLLEGE,
  UPDATE_COLLEGE,
  TOP_ALERT,
  COLLEGE_LOADER
} from "./types";

export const getCollege = () => (dispatch: Function) => {
  dispatch(setCollegeLoader("list", true));
  axios
    .get(`/api/college/`)
    .then((res) => {
        dispatch({
          type: GET_COLLEGE,
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

export const addCollege = (
    collegeName: string,
    collegeCode: string
  ) => (dispatch: Function) => {
    dispatch(setCollegeLoader("add", true));
    axios
      .post(`/api/college`, { collegeName, collegeCode })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_COLLEGE,
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
          dispatch(setCollegeLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCollegeLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteCollege = (id: string) => (dispatch: Function) => {
    dispatch(setCollegeLoader("delete", true));
    axios
      .delete(`/api/college/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_COLLEGE,
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
          dispatch(setCollegeLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCollegeLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateCollege = (id: String,  collegeName: string, collegeCode: string) => (
  dispatch: Function
) => {
  dispatch(setCollegeLoader("update", true));
  axios
    .patch(`/api/college/${id}`, { collegeName, collegeCode })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_COLLEGE,
          payload: res.data.dbRes
        });
        dispatch({

          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setCollegeLoader("update", false));
        dispatch({

          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setCollegeLoader("update", false));
        dispatch({

          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setCollegeLoader = (type: string, isLoading: boolean) => {
  return {
    type: COLLEGE_LOADER,
    payload: { type, isLoading }
  };
};