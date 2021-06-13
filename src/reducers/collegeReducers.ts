import { GET_COLLEGE, ADD_COLLEGE, DELETE_COLLEGE, UPDATE_COLLEGE, COLLEGE_LOADER } from "../actions/types";
import { I_College} from "../interfaces/college";
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
    case GET_COLLEGE:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_COLLEGE:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_COLLEGE:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_College) =>
          data._id === payload._id ? { ...data, collegeName: payload.collegeName, collegeCode: payload.collegeCode } : data
        )
      };
      case DELETE_COLLEGE:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_College) => data._id !== payload._id)
      };
    case COLLEGE_LOADER:
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