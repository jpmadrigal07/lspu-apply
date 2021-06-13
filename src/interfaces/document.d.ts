export interface I_Document {
    _id: string,
    fileName: string,
    isApplyToAllCourse: boolean,
    applyToCourses: string,
    isApplyToAllAdmitType: boolean,
    applyToAdmitTypes: string,
    isEnrolleeRequiredToUpload: boolean,
    isDocumentEnabled: boolean,
    createdAt: date,
    updatedAt: date | undefined,
    deletedAt: date | undefined
}