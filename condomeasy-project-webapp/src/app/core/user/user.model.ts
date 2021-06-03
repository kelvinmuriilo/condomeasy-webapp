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
