import { User } from "../api/uerTypes";
import { fetchUsers } from "../api/user";
import { useQuery } from "@tanstack/react-query";

const USERS = "USERS";

export const useUsers = () => {
  return useQuery<User[], Error>([USERS], fetchUsers)
}