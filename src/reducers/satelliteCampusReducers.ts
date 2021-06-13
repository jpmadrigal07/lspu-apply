import { GET_SATELLITE_CAMPUS, ADD_SATELLITE_CAMPUS, DELETE_SATELLITE_CAMPUS, UPDATE_SATELLITE_CAMPUS, SATELLITE_CAMPUS_LOADER  } from "../actions/types";
import { I_Satellite_Campus } from "../interfaces/satelliteCampus";
import { I_ReduxAction } from "../interfaces/reduxAction";
const initialState = {
  isLoading: false,
  isUpdateLoading: false,
  isAddLoading: false,
  isDeleteLoading: false,
  data: []
};
// eslint-disable-next-line
export default function (state = initialState, action: I_ReduxAction) {
  const { type, payload } = action;

  switch (type) {
    case GET_SATELLITE_CAMPUS:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_SATELLITE_CAMPUS:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_SATELLITE_CAMPUS:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Satellite_Campus) =>
          data._id === payload._id ? {
            ...data,
            campusName: payload.campusName,
            schoolName: payload.schoolName,
            email: payload.email,
            mobileNumber: payload.mobileNumber,
            currency: payload.currency,
            currencySymbol: payload.currencySymbol,
            city: payload.city,
            state: payload.state,
            address: payload.address
          } : data
        )
      };
      case DELETE_SATELLITE_CAMPUS:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Satellite_Campus) => data._id !== payload._id)
      };
    case SATELLITE_CAMPUS_LOADER:
      return {
        ...state,
        isLoading: payload.type === 'list' ? payload.isLoading : state.isLoading,
        isUpdateLoading: payload.type === 'update' ? payload.isLoading : state.isUpdateLoading,
        isAddLoading: payload.type === 'add' ? payload.isLoading : state.isAddLoading,
        isDeleteLoading: payload.type === 'delete' ? payload.isLoading : state.isDeleteLoading
      };
    
    default:
      return state;
  }
}