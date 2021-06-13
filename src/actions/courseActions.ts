import axios from "axios";
import { 
    GET_COURSE,
    ADD_COURSE,
    DELETE_COURSE,
    UPDATE_COURSE,
    TOP_ALERT,
    COURSE_LOADER
} from "./types";

export const getCourse = () => (dispatch: Function) => {
  dispatch(setCourseLoader("list", true));
  axios
    .get(`/api/course`)
    .then((res) => {
        dispatch({
          type: GET_COURSE,
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

export const addCourse = (
    courseName: string,
    courseCode: string
  ) => (dispatch: Function) => {
    dispatch(setCourseLoader("add", true));
    axios
      .post(`/api/course`, { courseName, courseCode })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_COURSE,
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
          dispatch(setCourseLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCourseLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteCourse = (id: string) => (dispatch: Function) => {
    dispatch(setCourseLoader("delete", true));
    axios
      .delete(`/api/course/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_COURSE,
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
          dispatch(setCourseLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCourseLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateCourse = (id: String, courseName: string, courseCode: string) => (
  dispatch: Function
) => {
  dispatch(setCourseLoader("update", true));
  axios
    .patch(`/api/course/${id}`, { courseName, courseCode })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_COURSE,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setCourseLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setCourseLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setCourseLoader = (type: string, isLoading: boolean) => {
  return {
    type: COURSE_LOADER,
    payload: { type, isLoading }
  };
};