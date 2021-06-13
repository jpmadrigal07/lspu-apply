import axios from "axios";
import { 
    GET_CAMPUS_COLLEGE,
    ADD_CAMPUS_COLLEGE,
    DELETE_CAMPUS_COLLEGE,
    UPDATE_CAMPUS_COLLEGE,
    TOP_ALERT,
    CAMPUS_COLLEGE_LOADER
} from "./types";

export const getCampusCollege = () => (dispatch: Function) => {
  dispatch(setCampusCollegeLoader("list", true));
  axios
    .get(`/api/campusCollege`)
    .then((res) => {
        dispatch({
          type: GET_CAMPUS_COLLEGE,
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

export const addCampusCollege = (
    campusId: string,
    collegeId: string
  ) => (dispatch: Function) => {
    dispatch(setCampusCollegeLoader("add", true));
    axios
      .post(`/api/campusCollege`, { campusId, collegeId })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_CAMPUS_COLLEGE,
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
          dispatch(setCampusCollegeLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCampusCollegeLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteCampusCollege = (id: string) => (dispatch: Function) => {
    dispatch(setCampusCollegeLoader("delete", true));
    axios
      .delete(`/api/campusCollege/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_CAMPUS_COLLEGE,
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
          dispatch(setCampusCollegeLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCampusCollegeLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateCampusCollege = (id: String, campusId: string, collegeId: string) => (
  dispatch: Function
) => {
  dispatch(setCampusCollegeLoader("update", true));
  axios
    .patch(`/api/campusCollege/${id}`, { campusId, collegeId })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_CAMPUS_COLLEGE,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setCampusCollegeLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setCampusCollegeLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setCampusCollegeLoader = (type: string, isLoading: boolean) => {
  return {
    type: CAMPUS_COLLEGE_LOADER,
    payload: { type, isLoading }
  };
};