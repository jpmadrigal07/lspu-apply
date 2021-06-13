export interface I_User_Document {
    _id: string,
    documentId: string,
    documentPath: String,
    userId: string,
    createdAt: string,
    updatedAt: string | undefined,
    deletedAt: string | undefined
}