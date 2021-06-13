import { GET_DOCUMENT, ADD_DOCUMENT, DELETE_DOCUMENT, UPDATE_DOCUMENT, DOCUMENT_LOADER } from "../actions/types";
import { I_Document } from "../interfaces/document";
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
    case GET_DOCUMENT:
      return {
        isLoading: false,
        data: payload.dbRes
      };
    case ADD_DOCUMENT:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_DOCUMENT:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Document) =>
          data._id === payload._id ? { 
            ...data, 
            fileName: payload.fileName,
            isApplyToAllCourse: payload.isApplyToAllCourse,
            applyToCourses: payload.applyToCourses,
            isApplyToAllAdmitType: payload.isApplyToAllAdmitType,
            applyToAdmitType: payload.applyToAdmitType,
            isEnrolleeRequiredToUpload: payload.isEnrolleeRequiredToUpload,
            isDocumentEnabled: payload.isDocumentEnabled
          } : data
        )
      };
      case DELETE_DOCUMENT:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Document) => data._id !== payload._id)
      };
    case DOCUMENT_LOADER:
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