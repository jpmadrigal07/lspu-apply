export interface I_Validator {
    valid: boolean | PromiseLike,
    error: string[]
}