import axios from "axios";
import { GET_MAIN_CAMPUS,
    ADD_MAIN_CAMPUS,
    DELETE_MAIN_CAMPUS,
    UPDATE_MAIN_CAMPUS,
    TOP_ALERT,
    MAIN_CAMPUS_LOADER
} from "./types";

export const getMainCampus = () => (dispatch: Function) => {
  dispatch(setMainCampusLoader("list", true));
  axios
    .get(`/api/mainCampus/`)
    .then((res) => {
        dispatch({
          type: GET_MAIN_CAMPUS,
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

export const addMainCampus = (
  campusName: string,
  schoolName: string,
  email: string,
  mobileNumber: string,
  currency: string,
  currencySymbol: string,
  city: string,
  state: string,
  address: string,
  ) => (dispatch: Function) => {
    dispatch(setMainCampusLoader("add", true));
    axios
      .post(`/api/mainCampus`, {
        campusName,
        schoolName,
        email,
        mobileNumber,
        currency,
        currencySymbol,
        city,
        state,
        address
      })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_MAIN_CAMPUS,
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
          dispatch(setMainCampusLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setMainCampusLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteMainCampus = (id: string) => (dispatch: Function) => {
    dispatch(setMainCampusLoader("delete", true));
    axios
      .delete(`/api/mainCampus/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_MAIN_CAMPUS,
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
          dispatch(setMainCampusLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setMainCampusLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateMainCampus = (
  id: string,
  campusName: string,
  schoolName: string,
  email: string,
  mobileNumber: Number,
  currency: string,
  currencySymbol: string,
  city: string,
  state: string,
  address: string,
) => (
  dispatch: Function
) => {
  dispatch(setMainCampusLoader("update", true));
  axios
    .patch(`/api/mainCampus/${id}`, {
      campusName,
      schoolName,
      email,
      mobileNumber,
      currency,
      currencySymbol,
      city,
      state,
      address 
    })
    .then(res => {
      if(res.data.isSuccess) {
        dispatch({
          type: UPDATE_MAIN_CAMPUS,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setMainCampusLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setMainCampusLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setMainCampusLoader = (type: string, isLoading: boolean) => {
  return {
    type: MAIN_CAMPUS_LOADER,
    payload: { type, isLoading }
  };
};