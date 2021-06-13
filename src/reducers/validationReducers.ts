import { STUDENT_VALIDATION, EDUCATIONAL_ATTAINMENT_VALIDATION, INTENDED_COURSE_VALIDATION, VALIDATION_LOADER, REQUIRED_DOCUMENTS_VALIDATION } from "../actions/types";
import { I_ReduxAction } from "../interfaces/reduxAction";

const initialState = {  
  isLoading: false,  
  studentInformation: { 
    error:[],
    valid: false
  },
  educationalAttainment: { 
    error:[],
    valid: false
  },
  requiredDocuments: { 
    error:[],
    valid: true
  },
  intendedCourse: { 
    error:[],
    valid: false
  }
};
// eslint-disable-next-line
export default function (state = initialState, action: I_ReduxAction) {
  switch (action.type) {
    case STUDENT_VALIDATION:
      return {
        ...state,
        studentInformation: { 
          error: action.payload.error,
          valid: action.payload.valid
        }
      };
    case EDUCATIONAL_ATTAINMENT_VALIDATION:
      return {
        ...state,
        educationalAttainment: { 
          error: action.payload.error,
          valid: action.payload.valid
        }
      };
    case REQUIRED_DOCUMENTS_VALIDATION:
      return {
        ...state,
        requiredDocuments: { 
          error: action.payload.error,
          valid: action.payload.valid
        }
      };
    case INTENDED_COURSE_VALIDATION:
      return {
        ...state,
        intendedCourse: { 
          error: action.payload.error,
          valid: action.payload.valid
        }
      };
    case VALIDATION_LOADER:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}