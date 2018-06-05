export interface AuthAccessModel {
  email: string;
  password: string;
}

export interface Token {
  [key: string]: string;
}

export interface User {
  _id: string;
  email: string;
  token?: Token;
}
