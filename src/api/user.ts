import { User } from './uerTypes';
import axios from 'axios';

const URL = 'https://testapi.io/api/Novickas/resource/users';

export const fetchUsers = (): Promise<User[]> => {
  return axios.get(URL)
  .then((response) => response.data.data)
}