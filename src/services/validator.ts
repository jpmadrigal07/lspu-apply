import Ajv from "ajv"
import { I_Student_Validation, I_Educational_Attainment, I_Intended_Course } from "../interfaces/student"
import studentInformationSchema from "../schema/studentInformation.json"
import educationalAttainmentSchema from "../schema/educationalAttainment.json"
import intendedCourseSchema from "../schema/intendedCourse.json"
const ajv = new Ajv({allErrors: true})

export const validateStudentInformation = (studentInformation: I_Student_Validation) => {
    const valid = ajv.validate(studentInformationSchema, studentInformation)
    return {valid, error: ajv.errors}
}

export const validateEducationalAttainment = (educationalAttainment: I_Educational_Attainment) => {
    const valid = ajv.validate(educationalAttainmentSchema, educationalAttainment)
    return {valid, error: ajv.errors}
}

export const validateIntendedCourse = (intendedCourse: I_Intended_Course) => {
    const valid = ajv.validate(intendedCourseSchema, intendedCourse)
    return {valid, error: ajv.errors}
}