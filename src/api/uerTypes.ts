export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  likes?: number;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string 
}

export type UserLogin = {
  email: string;
  password: string;
}