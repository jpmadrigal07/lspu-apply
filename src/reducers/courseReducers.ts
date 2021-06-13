import { GET_COURSE, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE, COURSE_LOADER } from "../actions/types";
import { I_Course } from "../interfaces/course";
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
    case GET_COURSE:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_COURSE:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_COURSE:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Course) =>
          data._id === payload._id ? { ...data, courseName: payload.courseName, courseCode: payload.courseCode } : data
        )
      };
      case DELETE_COURSE:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Course) => data._id !== payload._id)
      };
    case COURSE_LOADER:
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