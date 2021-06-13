import { I_User } from "./user";
import { I_Intended_Course, I_Student } from "./student";

export interface I_Auth {
    isLoading: boolean,
    user: I_User,
    otherInfo: I_Student,
}