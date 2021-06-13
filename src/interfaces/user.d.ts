export interface I_User {
    _id: string,
    email: string,
    password: string,
    userType: string,
    createdAt: string,
    updatedAt: string | undefined,
    deletedAt: string | undefined
}