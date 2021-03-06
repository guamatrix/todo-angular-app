export interface AuthAccessModel {
  email: string;
  password: string;
}

export interface ChangePassModel {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface Token {
  [key: string]: string;
}

export interface User {
  _id: string;
  email: string;
  token?: Token;
  firstName?: string;
  lastName?: string;
  birthDay?: Date;
}
