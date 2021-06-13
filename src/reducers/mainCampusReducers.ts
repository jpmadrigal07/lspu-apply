import { GET_MAIN_CAMPUS, ADD_MAIN_CAMPUS, DELETE_MAIN_CAMPUS, UPDATE_MAIN_CAMPUS, MAIN_CAMPUS_LOADER } from "../actions/types";
import { I_Main_Campus } from "../interfaces/mainCampus";
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
    case GET_MAIN_CAMPUS:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_MAIN_CAMPUS:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_MAIN_CAMPUS:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Main_Campus) =>
          data._id === payload._id ? {
            ...data,
            campusName: payload.campusName,
            mainCampusId: payload.mainCampusId,
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
      case DELETE_MAIN_CAMPUS:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Main_Campus) => data._id !== payload._id)
      };
    case MAIN_CAMPUS_LOADER:
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