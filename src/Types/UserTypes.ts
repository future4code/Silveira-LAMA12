export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

export type UserTypes = {
  name: string
  email: string
  password: string
  role?: USER_ROLES
}

export type loginType = {
  email: string
  password: string
}


export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: USER_ROLES;
}[];


export type LoginInputDTO = {
  email: string
  password: string
}