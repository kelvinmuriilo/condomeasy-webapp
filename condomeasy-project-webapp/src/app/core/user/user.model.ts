import { ResponseModel } from '../model/response.model';

export interface UserToken {
  sub: string;
  profiles: Array<any>;
  exp: number;
  iat: number;
}

export enum UserRole {
  ADMIN = 'Administrador',
  USER = 'Usuario',
}

export interface User {
  apartmentBlock: string;
  apartmentNumber: string;
  condominiumId: number;
  cpf: string;
  email: 'string';
  id: number;
  lastLoginDate: Date;
  lastUpdateDate: Date;
  name: string;
  profileId: number;
  registrationDate: Date;
  status: string;
  surname: string;
  telephone: string;
  username: string;
}

export interface UserResponseModel extends ResponseModel {
  data: User;
}
