export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  images_likes?: string | null;
  videos_likes?: string | null;
  avatar?: string | null;
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