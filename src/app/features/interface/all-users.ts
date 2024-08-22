
export interface User{
  id?: number;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string,
}
export interface AllUsers {
  limit : number,
  skip : number,
  total : number
  users : User[]
 }
 