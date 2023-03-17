import { fetchUsers, userRegister } from "../api/user";
import { useMutation, useQuery } from "@tanstack/react-query";

import { User } from "../api/userTypes";

const USERS = "USERS";

export const useUsers = () => {
  return useQuery<User[], Error>([USERS], fetchUsers)
}

export const useCreateUser = () => {
  return useMutation(userRegister);
};