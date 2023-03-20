export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 500) + 1;
  return randomNumber.toString();
}

export interface LocalUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  likes: number[];
  avatar: string;
  createdAt: string;
  updatedAt: string;
}