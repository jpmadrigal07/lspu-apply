import { GET_USER_DOCUMENT, ADD_USER_DOCUMENT, DELETE_USER_DOCUMENT, UPDATE_USER_DOCUMENT, USER_DOCUMENT_LOADER } from "../actions/types";
import { I_User_Document } from "../interfaces/userDocument";
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
    case GET_USER_DOCUMENT:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_USER_DOCUMENT:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_USER_DOCUMENT:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_User_Document) =>
          data._id === payload._id ? { ...data,
            documentId: payload.documentId,
            documentPath: payload.documentPath,
            userId: payload.userId
          } : data
        )
      };
      case DELETE_USER_DOCUMENT:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_User_Document) => data._id !== payload._id)
      };
    case USER_DOCUMENT_LOADER:
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