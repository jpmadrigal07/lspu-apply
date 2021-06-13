export interface I_College_Courses {
    _id: string,
    campusIds: string[],
    collegeId: string,
    courseId: string,
    createdAt: date,
    updatedAt: date | undefined,
    deletedAt: date | undefined
}