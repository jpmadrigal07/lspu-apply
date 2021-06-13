import axios from "axios";
import { 
    GET_SATELLITE_CAMPUS,
    ADD_SATELLITE_CAMPUS,
    DELETE_SATELLITE_CAMPUS,
    UPDATE_SATELLITE_CAMPUS,
    TOP_ALERT,
    SATELLITE_CAMPUS_LOADER
} from "./types";

export const getSatelliteCampus = () => (dispatch: Function) => {
  dispatch(setSatelliteCampusLoader("list", true));
  axios
    .get(`/api/satelliteCampus`)
    .then((res) => {
        dispatch({
          type: GET_SATELLITE_CAMPUS,
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

export const addSatelliteCampus = (
  campusName: string,
  mainCampusId: string,
  schoolName: string,
  email: string,
  mobileNumber: string,
  currency: string,
  currencySymbol: string,
  city: string,
  state: string,
  address: string,
  ) => (dispatch: Function) => {
    dispatch(setSatelliteCampusLoader("add", true));
    axios
      .post(`/api/satelliteCampus`, {
        campusName,
        mainCampusId,
        schoolName,
        email,
        mobileNumber,
        currency,
        currencySymbol,
        city,
        state,
        address })
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: ADD_SATELLITE_CAMPUS,
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
          dispatch(setSatelliteCampusLoader("add", false));
          dispatch({
            type: TOP_ALERT,
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setSatelliteCampusLoader("add", false));
        dispatch({
          type: TOP_ALERT,
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

  export const deleteSatelliteCampus = (id: string) => (dispatch: Function) => {
    dispatch(setSatelliteCampusLoader("delete", true));
    axios
      .delete(`/api/satelliteCampus/${id}`)
      .then((res) => {
        if (res.data.isSuccess) {
          dispatch({
            type: DELETE_SATELLITE_CAMPUS,
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
          dispatch(setSatelliteCampusLoader("delete", false));
          dispatch({
            payload: { showAlert: true, message: res.data.dbRes, type: "danger" },
          });
        }
      })
      .catch((err) => {
        dispatch(setSatelliteCampusLoader("delete", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" },
        });
      });
  };

export const updateSatelliteCampus = (
  id: string,
  campusName: string,
  mainCampusId: string,
  schoolName: string,
  email: string,
  mobileNumber: string,
  currency: string,
  currencySymbol: string,
  city: string,
  state: string,
  address: string,
) => (
  dispatch: Function
) => {
  dispatch(setSatelliteCampusLoader("update", true));
  axios
    .patch(`/api/satelliteCampus/${id}`, {
      campusName,
      mainCampusId,
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
          type: UPDATE_SATELLITE_CAMPUS,
          payload: res.data.dbRes
        });
        dispatch({
          payload: { showAlert: true, message: "Successfully updated", type: "success" }
        });
      } else {
        dispatch(setSatelliteCampusLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: res.data.dbRes, type: "danger" }
        });
      }
    })
    .catch((err) => {
        dispatch(setSatelliteCampusLoader("update", false));
        dispatch({
          payload: { showAlert: true, message: err.message, type: "danger" }
        });
      }
    );
};

export const setSatelliteCampusLoader = (type: string, isLoading: boolean) => {
  return {
    type: SATELLITE_CAMPUS_LOADER,
    payload: { type, isLoading }
  };
};