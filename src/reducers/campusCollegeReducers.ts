import { GET_CAMPUS_COLLEGE, ADD_CAMPUS_COLLEGE, DELETE_CAMPUS_COLLEGE, UPDATE_CAMPUS_COLLEGE, CAMPUS_COLLEGE_LOADER } from "../actions/types";
import { I_Campus_College} from "../interfaces/campusCollege";
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
    case GET_CAMPUS_COLLEGE:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_CAMPUS_COLLEGE:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_CAMPUS_COLLEGE:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Campus_College) =>
          data._id === payload._id ? { ...data, campusId: payload.campusId, collegeId: payload.collegeId } : data
        )
      };
      case DELETE_CAMPUS_COLLEGE:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Campus_College) => data._id !== payload._id)
      };
    case CAMPUS_COLLEGE_LOADER:
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