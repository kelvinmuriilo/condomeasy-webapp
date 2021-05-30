export interface UserToken {
  sub: string;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
