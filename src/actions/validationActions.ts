import { I_Validator } from '../interfaces/validator';
import { STUDENT_VALIDATION, EDUCATIONAL_ATTAINMENT_VALIDATION, INTENDED_COURSE_VALIDATION, REQUIRED_DOCUMENTS_VALIDATION } from './types';

export const triggerStudentValidation = (errors: I_Validator) => (
  dispatch: Function
) => {
  return dispatch({
    type: STUDENT_VALIDATION,
    payload: errors
  });
}

export const triggerEducationalAttainmentValidation = (errors: I_Validator) => (
  dispatch: Function
) => {
  return dispatch({
    type: EDUCATIONAL_ATTAINMENT_VALIDATION,
    payload: errors
  });
}

export const triggerRequiredDocumentsValidation = (errors: I_Validator) => (
  dispatch: Function
) => {
  return dispatch({
    type: REQUIRED_DOCUMENTS_VALIDATION,
    payload: errors
  });
}

export const triggerIntendedCourseValidation = (errors: I_Validator) => (
  dispatch: Function
) => {
  return dispatch({
    type: INTENDED_COURSE_VALIDATION,
    payload: errors
  });
}