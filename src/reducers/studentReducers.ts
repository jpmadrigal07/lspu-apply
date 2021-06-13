import { GET_STUDENT, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, STUDENT_LOADER } from "../actions/types";
import { I_Student } from "../interfaces/student";
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
    case GET_STUDENT:
      return {
        isLoading: false,
        data: payload.dbRes
      };
    case ADD_STUDENT:
      return {
        ...state,
        data: [...state.data, payload],
        isAddLoading: false,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        isUpdateLoading: false,
        data: state.data.map((data: I_Student) =>
          data._id === payload._id ? {
            ...data,
            lrn: payload.lrn,
            campusId: payload.campusId,
            admitType: payload.admitType,
            typeOfStudent: payload.typeOfStudent,
            firstName: payload.firstName,
            middleName: payload.middleName,
            lastName: payload.lastName,
            extensionName: payload.extensionName,
            mobileNumber: payload.mobileNumber,
            dateOfBirth: payload.dateOfBirth,
            placeofBirth: payload.placeofBirth,
            gender: payload.gender,
            citizenship: payload.citizenship,
            barangay: payload.barangay,
            municipality: payload.municipality,
            province: payload.province,
            zipCode: payload.zipCode,
            civilStatus: payload.civilStatus,
            guardianName: payload.guardianName,
            guardianAddress: payload.guardianAddress,
            fathersName: payload.fathersName,
            mothersName: payload.mothersName,
            dswdHouseholdNumber: payload.dswdHouseholdNumber,
            householdPerCapitaIncome: payload.househouldPerCapitaIncome,
            guardianMobileNumber: payload.guardianMobileNumber,
            relationWithGuardian: payload.relationWithGuardian,
            disability: payload.disability,
            isIndigenousPerson: payload.isIndigenousPerson
          } : data
        )
      };
    case DELETE_STUDENT:
      return {
        ...state,
        isDeleteLoading: false,
        data: state.data.filter((data: I_Student) => data._id !== payload._id)
      };
    case STUDENT_LOADER:
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