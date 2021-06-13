import { I_Auth } from "./auth";
import { I_TopAlert } from "./topAlert";
import { I_Student, I_Student_Validation } from "./student";
import { I_Main_Campus } from "./mainCampus";
import { I_Sattelite_Campus } from "./satelliteCampus";
import { I_Course } from "./course";
import { I_Validator } from "./validator";
import { I_Document } from "./document";
import { I_User_Document } from "./userDocument";
import { I_College } from "./college";
import { I_Campus_College } from "./campusCollege";
import { I_College_Courses } from "./collegeCourses";

export interface I_Global {
    auth: I_Auth,
    topAlert: I_TopAlert,
    student: {
        isLoading: boolean,
        isUpdateLoading: boolean,
        isAddLoading: boolean,
        isDeleteLoading: boolean,
        data: I_Student[]
    },
    mainCampus: {
        isLoading: boolean,
        data: I_Main_Campus[]
    },
    satelliteCampus: {
        isLoading: boolean,
        data: I_Sattelite_Campus[]
    },
    course: {
        isLoading: boolean,
        data: I_Course[]
    },
    college: {
        isLoading: boolean,
        data: I_College[]
    },
    campusCollege: {
        isLoading: boolean,
        data: I_Campus_College[]
    },
    collegeCourse: {
        isLoading: boolean,
        data: I_College_Courses[]
    },
    validation: {
        student: I_Validator,
        studentInformation: I_Validator,
        educationalAttainment: I_Validator,
        requiredDocuments: I_Validator,
        intendedCourse: I_Validator,
    },
    document:{
        isLoading: boolean,
        data: I_Document[]
    },
    userDocument:{
        isLoading: boolean,
        data: I_User_Document[]
    }
}