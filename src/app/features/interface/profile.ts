export interface Profile {
  id: 1;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}
export interface UpdateProfilePayload{
        id: string;
        firstName: string;
        lastName: string; 
        age: number;
        email: string;
        phone: string;
        birthDate: string
       
      
}
