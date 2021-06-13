import axios from "axios";
import { 
  GET_COLLEGE_COURSES,
  ADD_COLLEGE_COURSES,
  DELETE_COLLEGE_COURSES,
  UPDATE_COLLEGE_COURSES,
  TOP_ALERT,
  COLLEGE_COURSES_LOADER
} from "./types";

export const getCollegeCourses = () => (dispatch: Function) => {
  dispatch(setCollegeCoursesLoader("list", true));
  axios
    .get(`/api/collegeCourses/${''}`)
    .then((res) => {
        dispatch({
          type: GET_COLLEGE_COURSES,
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

export const addCollegeCourses = (
    collegeId: string,
    courseId: string
  ) => (dispatch: Function) => {
    dispatch(setCollegeCoursesLoader("add", true));
    axios
      .post(`/api/collegeCourses`, { collegeId, courseId })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_COLLEGE_COURSES,
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
          dispatch(setCollegeCoursesLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCollegeCoursesLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteCollegeCourses = (id: string) => (dispatch: Function) => {
    dispatch(setCollegeCoursesLoader("delete", true));
    axios
      .delete(`/api/collegeCourses/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_COLLEGE_COURSES,
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
          dispatch(setCollegeCoursesLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setCollegeCoursesLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateCollegeCourses = (id: String, collegeId: string, courseId: string) => (
  dispatch: Function
) => {
  dispatch(setCollegeCoursesLoader("update", true));
  axios
    .patch(`/api/collegeCourses/${id}`, { collegeId, courseId })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_COLLEGE_COURSES,
          payload: res.data.dbRes
        });
        dispatch({

          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setCollegeCoursesLoader("update", false));
        dispatch({

          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setCollegeCoursesLoader("update", false));
        dispatch({

          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setCollegeCoursesLoader = (type: string, isLoading: boolean) => {
  return {
    type: COLLEGE_COURSES_LOADER,
    payload: { type, isLoading }
  };
};