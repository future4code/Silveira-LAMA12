export enum ROLE {
    NORMAL = "normal",
    ADMINISTRADOR = 'administrador'
}
export type authenticationData = {
    role: ROLE,
    id: string
    
}


export type SignupInputDTO = {
    name: string
    email: string
    password: string
    role?: ROLE
}
