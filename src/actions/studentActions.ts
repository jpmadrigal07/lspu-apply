import axios from "axios";
import {
  I_Actions_Educational_Attainment,
  I_Actions_Intended_Course,
  I_Actions_Student_Information,
} from "../interfaces/actions";
import { loginUser } from "./authActions";
import {
  GET_STUDENT,
  DELETE_STUDENT,
  AUTH_LOADED,
  TOP_ALERT,
  STUDENT_LOADER,
} from "./types";

export const getStudent = () => (dispatch: Function) => {
  dispatch(setStudentLoader("list", true));
  axios
    .get(`/api/student`)
    .then((res) => {
      dispatch({
        type: GET_STUDENT,
        payload: res.data !== "" ? res.data : {},
      });
    })
    .catch((err) => {
      dispatch({
        type: TOP_ALERT,
        payload: { showAlert: true, message: err.message, type: "danger" },
      });
    });
};

export const addStudent =
  (
    lrn: string | undefined,
    campusId: string,
    admitType: string,
    typeOfStudent: string,
    email: string,
    password: string
  ) =>
  (dispatch: Function) => {
    dispatch(setStudentLoader("add", true));
    axios
      .post(`/api/student`, {
        lrn,
        campusId,
        admitType,
        typeOfStudent,
        email,
        password,
      })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch(loginUser(email, password));
          dispatch({
            type: TOP_ALERT,
            payload: {
              showAlert: true,
              message: "Successfully created! We are logging you in.",
              type: "success",
            },
          });
        } else {
          dispatch(setStudentLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: {
              showAlert: true,
              message: res.data.dbRes,
              type: "danger",
            },
          });
        }
      })
      .catch((err) => {
        dispatch(setStudentLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const deleteStudent = (id: string) => (dispatch: Function) => {
  dispatch(setStudentLoader("delete", true));
  axios
    .delete(`/api/Student/${id}`)
    .then((res) => {
      if (res.data.isSuccess) {
        dispatch({
          type: DELETE_STUDENT,
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
        dispatch(setStudentLoader("delete", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
        });
      }
    })
    .catch((err) => {
      dispatch(setStudentLoader("delete", false));
      dispatch({
        type: TOP_ALERT,
        payload: { showAlert: true, message: err.message, type: "danger" },
      });
    });
};

export const updateStudent =
  (
    id: string,
    student: I_Actions_Intended_Course | I_Actions_Student_Information | I_Actions_Educational_Attainment
  ) =>
  (dispatch: Function) => {
    dispatch(setStudentLoader("update", true));
    axios
      .patch(`/api/student/${id}`, student)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: AUTH_LOADED,
            payload: { otherInfo: res.data.dbRes },
          });
          dispatch(setStudentLoader("update", false));
          dispatch({
            type: TOP_ALERT,
            payload: {
              showAlert: true,
              message: "Successfully updated",
              type: "success",
            },
          });
        } else {
          dispatch(setStudentLoader("update", false));
          dispatch({
            type: TOP_ALERT,
            payload: {
              showAlert: true,
              message: res.data.dbRes,
              type: "danger",
            },
          });
        }
      })
      .catch((err) => {
        dispatch(setStudentLoader("update", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const setStudentLoader = (type: string, isLoading: boolean) => {
  return {
    type: STUDENT_LOADER,
    payload: { type, isLoading },
  };
};
