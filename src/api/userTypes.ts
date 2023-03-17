export type User = {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  likes?: number;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string 
  confirm_password?: string;
}

export type UserLogin = {
  email: string;
  password: string;
}

export type UserRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}