import { I_School_Info } from "./student";

export interface I_Actions_Student_Information {
    lrn: string | undefined,
    campusId: string,
    admitType: string,
    typeOfStudent: string,
    firstName: string,
    middleName: string,
    lastName: string,
    extensionName: string,
    mobileNumber: string,
    landlineNumber: string,
    dateOfBirth: string,
    placeOfBirth: string,
    gender: string,
    citizenship: string,
    houseNumber: string,
    street: string,
    barangay: string,
    municipality: string,
    province: string,
    zipCode: string,
    civilStatus: string,
    guardianName: string,
    guardianAddress: string,
    fathersName: string,
    mothersName: string,
    dswdHouseholdNumber: string,
    dswdHouseholdPerCapitaIncome: number,
    guardianMobileNumber: string,
    guardianEmail: string,
    relationWithGuardian: string,
    disability: string,
    isIndigenousPerson: boolean
}
export interface I_Actions_Intended_Course {
    intendedCourse: {
        firstChoice: string,
        secondChoice: string,
        thirdChoice: string
    }
}

export interface I_Actions_Educational_Attainment {
    educationalAttainment: {
        elementary: I_School_Info,
        highSchool: I_School_Info,
        seniorHighSchool: I_School_Info,
        college: I_School_Info,
        graduate: I_School_Info,
        als: I_School_Info
    }
}