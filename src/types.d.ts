export type emailTemplate = `${string}@${string}` | "";

export interface user {
    name: string,
    username: string,
    password: string,
    email: emailTemplate
}