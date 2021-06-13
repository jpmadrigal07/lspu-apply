import { GET_COLLEGE_COURSES, ADD_COLLEGE_COURSES, DELETE_COLLEGE_COURSES, UPDATE_COLLEGE_COURSES, COLLEGE_COURSES_LOADER } from "../actions/types";
import { I_College_Courses} from "../interfaces/collegeCourses";
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
    case GET_COLLEGE_COURSES:
      return {
        isLoading: false,
        data: payload.dbRes
      };
      case ADD_COLLEGE_COURSES:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_COLLEGE_COURSES:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_College_Courses) =>
          data._id === payload._id ? { ...data, collegeId: payload.collegeId, courseId: payload.courseId } : data
        )
      };
      case DELETE_COLLEGE_COURSES:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_College_Courses) => data._id !== payload._id)
      };
    case COLLEGE_COURSES_LOADER:
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