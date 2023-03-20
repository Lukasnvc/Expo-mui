import { User } from './userTypes';
import axios from 'axios';

const URL = 'https://testapi.io/api/Novickas/resource/users';

export const fetchUsers = (): Promise<User[]> => {
  return axios.get(URL)
  .then((response) => response.data.data)
}


export const userRegister = (user: any): Promise<User[]> => {
  console.log(user)
  return axios.post(URL, user).then((response) => response.data);
}

export const userPut = (user: User): Promise<User[]> => {
  console.log(user);
  return axios.put(`https://testapi.io/api/Novickas/resource/users/${user.id}`, user)
    .then((response) => response.data);
};
