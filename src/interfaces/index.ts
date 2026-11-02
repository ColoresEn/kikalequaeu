export interface ITodo {
  id: string;
  title: string;
  body: string | null;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IUser {
  id: string;
  name: string;
 email: string ;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IContact {
  id:    string; 
  postername:string;
  message :   string;
  email :     string;
  topic :     string;
  createdAt:  Date;
}