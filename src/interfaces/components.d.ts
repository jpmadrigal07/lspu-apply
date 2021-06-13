import { I_Campus_College } from "./campusCollege";
import { I_College } from "./college";
import { I_College_Courses } from "./collegeCourses";
import { I_Course } from "./course";
import { I_Document } from "./document";
import { I_Main_Campus } from "./mainCampus";
import { I_Satellite_Campus } from "./satelliteCampus";
import { I_User_Document } from "./userDocument";
import { I_Educational_Attainment, I_Intended_Course, I_School_Info, I_Student, I_Student_Validation } from "./student";

export interface I_Component_Student {
    userId: string,
    firstName: string,
    middleName: string,
    lastName: string,
    lrn: string | undefined,
    mobileNumber: string,
    userDocument: I_User_Document[],
    document: I_Document[]
}

export interface I_Component_Schedule {
    interviewTimeFrom: string | null | undefined,
    interviewTimeTo: string | null | undefined,
    interviewRoom: string | null | undefined,
    examinationTimeFrom: string | null | undefined,
    examinationTimeTo: string | null | undefined,
    examinationRoom: string | null | undefined,
}

enum StepStatus {
    finish,
    wait,
    process,
    error
}

type StepStatusStrings = keyof typeof StepStatus;

export interface I_Component_Application_Status {
    isStudentInformationValidationValid: boolean,
    isIntendedCourseValidationValid: boolean,
    isEducationalAttainmentValidationValid: boolean,
    isRequiredDocumentsValidationValid: boolean,
    validation: {
        studentInformation: I_Validator,
        educationalAttainment: I_Validator,
        requiredDocuments: I_Validator,
        intendedCourse: I_Validator,
    }
}

enum DashboardTabs {
    studentInformation,
    educationalAttainment,
    intendedCourse,
    requiredDocuments
}

export type DashboardTabStrings = keyof typeof DashboardTabs;

export interface I_Component_Login {
    alertMessage: string,
    alertType: string,
    isAuthLoading: boolean,
    loginUser: Function,
    triggerTopAlert: Function,
    authId: string, 
    authEmail: string, 
    authUserType: string,
    emptyAuth: Function
}

export interface I_Component_Create {
    alertMessage: string,
    alertType: string,
    isAuthLoading: boolean,
    isAddStudentLoading: boolean,
    addStudent: Function,
    triggerTopAlert: Function,
    authId: string, 
    authEmail: string, 
    authUserType: string,
    getMainCampus: Function,
    getSatelliteCampus: Function,
    isMainCampusLoading: boolean,
    isSatelliteCampusLoading: boolean,
    mainCampuses: I_Main_Campus[],
    satelliteCampuses: I_Satellite_Campus[],
    emptyAuth: Function
}

export interface I_Component_Navigation extends I_Student_Validation, I_Educational_Attainment, I_Intended_Course {
    alertMessage: string,
    alertType: string,
    showAlert: boolean,
    isAuthLoading: boolean,
    triggerTopAlert: Function,
    authId: string, 
    authEmail: string, 
    authUserType: string
    verifyToken: Function,
    currentPage: string,
    triggerStudentValidation: Function,
    userDocument: I_User_Document[],
    getUserDocument: Function,
    document: I_Document[],
    getDocument: Function
    triggerEducationalAttainmentValidation: Function,
    triggerIntendedCourseValidation: Function,
    otherInfo: I_Student,
    emptyAuth: Function,
    isStudentInformationValidationValid: boolean,
    isIntendedCourseValidationValid: boolean,
    isEducationalAttainmentValidationValid: boolean,
    isRequiredDocumentsValidationValid: boolean,
}

export interface I_Component_Dashboard {
    firstName: string,
    middleName: string,
    lastName: string,
    lrn: string | undefined,
    mobileNumber: string,
    triggerTopAlert: Function
}

export interface I_Component_Intended_Course {
    campusId: string,
    mainCampus: I_Main_Campus[],
    satelliteCampus: I_Satellite_Campus[],
    course: I_Course[],
    intendedCourse: {
        firstChoice: string,
        secondChoice: string,
        thirdChoice: string,
    }
    getMainCampus: Function,
    getSatelliteCampus: Function,
    getCourse: Function,
    setIsEditState: Function,
    college: I_College[],
    getCollege: Function
}

export interface I_Component_Edit_Intended_Course {
    _id: string,
    campusId: string,
    mainCampus: I_Main_Campus[],
    satelliteCampus: I_Satellite_Campus[],
    course: I_Course[],
    intendedCourse: {
        firstChoice: string,
        secondChoice: string,
        thirdChoice: string,
    }
    getMainCampus: Function,
    getSatelliteCampus: Function,
    getCourse: Function,
    setIsEditState: Function,
    isIntendedCourseUpdateLoading: boolean,
    updateStudent: Function,
    triggerTopAlert: Function,
    college: I_College[],
    getCollege: Function,
    collegeCourses: I_College_Courses[],
    getCollegeCourses: Function
}
export interface I_Component_Student_Information {
    firstName: string,
    middleName: string,
    lastName: string,
    extensionName: string,
    admitType: string,
    typeOfStudent: string,
    mobileNumber: string,
    landlineNumber: string,
    dateOfBirth: string,
    placeOfBirth: string,
    gender: string,
    citizenship: string,
    houseNumber: string | undefined,
    street: string | undefined,
    barangay: string,
    municipality: string,
    province: string,
    zipCode: string,
    gender: string,
    citizenship: string,
    civilStatus: string,
    guardianName: string,
    guardianMobileNumber: string,
    guardianEmail: string | undefined,
    relationWithGuardian: string,
    guardianAddress: string,
    fathersName: string,
    mothersName: string,
    dswdHouseholdNumber: string | null,
    dswdHouseholdPerCapitaIncome: number | null,
    disability: string,
    isIndigenousPerson: boolean,
    setIsEditState: Function
}

export interface I_Component_Edit_Student_Information {
    _id: string,
    lrn: string | undefined,
    campusId: string,
    firstName: string,
    middleName: string,
    lastName: string,
    extensionName: string,
    admitType: string,
    typeOfStudent: string,
    mobileNumber: string,
    landlineNumber: string,
    dateOfBirth: date,
    placeOfBirth: string,
    gender: string,
    citizenship: string,
    houseNumber: string | undefined,
    street: string | undefined,
    barangay: string,
    municipality: string,
    province: string,
    zipCode: string,
    gender: string,
    citizenship: string,
    civilStatus: string,
    guardianName: string,
    guardianMobileNumber: string,
    guardianEmail: string | undefined,
    relationWithGuardian: string,
    guardianAddress: string,
    fathersName: string,
    mothersName: string,
    dswdHouseholdNumber: string | null,
    dswdHouseholdPerCapitaIncome: number | null,
    disability: string,
    isIndigenousPerson: boolean,
    isStudentUpdateLoading: boolean,
    updateStudent: Function,
    setIsEditState: Function
}

export interface I_Component_Notification {
    studentInformationValidationError: string[],
    isStudentValidationValid: boolean,
    isEducationalAttainmentValidationValid: boolean,
    educationalAttainmentValidationError: string[],
    isIntendedCourseValidationValid: boolean,
    intendedCourseValidationError: string[],
    isRequiredDocumentsValidationValid: boolean,
    requiredDocumentsValidationError: string[]
}

export interface I_Component_Courses {
    getMainCampus: Function,
    getSatelliteCampus: Function,
    getCampusCollege: Function,
    getCollegeCourses: Function,
    isMainCampusLoading: boolean,
    isSatelliteCampusLoading: boolean,
    mainCampuses: I_Main_Campus[],
    satelliteCampuses: I_Satellite_Campus[],
    isCampusCollegesLoading: boolean,
    isCollegeCoursesLoading: boolean,
    isCollegesLoading: boolean,
    isCoursesLoading: boolean,
    getCollege: Function,
    getCourse: Function,
    colleges: I_College[],
    courses: I_Course[],
    campusColleges: I_Campus_College[],
    collegeCourses: I_College_Courses[]
}
export interface I_Component_Educational_Attainment_Information {
    setIsEditState: Function,
    elementary: I_School_Info, 
    highSchool: I_School_Info, 
    seniorHighSchool: I_School_Info,
    college: I_School_Info,
    graduate: I_School_Info,
    als: I_School_Info
}

export interface I_Component_Edit_Educational_Attainment_Information {
    _id: string,
    setIsEditState: Function,
    setIsEditState: Function,
    elementary: I_School_Info, 
    highSchool: I_School_Info, 
    seniorHighSchool: I_School_Info,
    college: I_School_Info,
    graduate: I_School_Info,
    als: I_School_Info
    isEducationalAttainmentUpdateLoading: boolean
    updateStudent: Function
}

export interface I_Component_Required_Documents {
    userId: string
    document: I_Document[],
    userDocument: I_User_Document[],
    triggerTopAlert: Function,
    addUserDocument: Function,
    setUserDocument: Function
}
export interface I_Component_Campus_Courses {
    courseName: string | undefined,
    courseCode: string | undefined,
    collegeName: string | undefined,
    collegeCode: string | undefined
}
