import { GET_USER, ADD_USER, DELETE_USER, UPDATE_USER, USER_LOADER } from "../actions/types";
import { I_User } from "../interfaces/user";
import { I_ReduxAction } from "../interfaces/reduxAction";

const initialState = {
  isLoading: false,
  isUpdateLoading: false,
  isAddLoading: false,
  isDeleteLoading: false,
  data: []
};
// eslint-disable-next-line
export default function(state = initialState, action: I_ReduxAction) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_USER:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_User) =>
          data._id === payload._id ? { ...data, email: payload.email, password: payload.password, userType: payload.userType } : data
        )
      };
      case DELETE_USER:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_User) => data._id !== payload._id)
      };
    case USER_LOADER:
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