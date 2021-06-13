export interface I_Student extends I_Intended_Course, I_Educational_Attainment, I_Required_Documents {
  _id: string;
  lrn: string | undefined;
  email: string;
  campus: string;
  campusId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  extensionName: string;
  admitType: string;
  typeOfStudent: string;
  mobileNumber: string;
  landlineNumber: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  citizenship: string;
  houseNumber: string | undefined;
  street: string | undefined;
  barangay: string;
  municipality: string;
  province: string;
  zipCode: string;
  civilStatus: string;
  guardianName: string;
  guardianEmail: string | undefined;
  guardianAddress: string;
  guardianMobileNumber: string;
  relationWithGuardian: string;
  fathersName: string;
  mothersName: string;
  dswdHouseholdNumber: string | null;
  dswdHouseholdPerCapitaIncome: number | null;
  disability: string;
  isIndigenousPerson: boolean;
  createdAt: string;
  updateAt: string | undefined;
  deletedAt: string | undefined;
}

export interface I_Intended_Course {
  intendedCourse: {
    firstChoice: string;
    secondChoice: string;
    thirdChoice: string;
  };
}
export interface I_Student_Validation {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  citizenship: string;
  barangay: string;
  municipality: string;
  province: string;
  zipCode: string;
  civilStatus: string;
  guardianName: string;
  guardianEmail: string | undefined;
  guardianAddress: string;
  guardianMobileNumber: string;
  relationWithGuardian: string;
  fathersName: string;
  mothersName: string;
  disability: string;
  isIndigenousPerson: boolean;
}

export interface I_Educational_Attainment {
  educationalAttainment: {
    elementary: I_School_Info;
    highSchool: I_School_Info;
    seniorHighSchool: I_School_Info;
    college: I_School_Info;
    graduate: I_School_Info;
    als: I_School_Info;
  }
}
export interface I_School_Info {
  schoolName: string;
  schoolAddress: string;
  typeOfSchool: string;
  yearGraduated: string;
}

export interface I_Required_Documents {
  documentName: string,
}