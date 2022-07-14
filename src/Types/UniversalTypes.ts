
export enum ROLE {
    NORMAL = "normal",
    ADMINISTRADOR = 'administrador'
}

export type authenticationData = {
    id: string
    role: ROLE
}
