import {
  DispatchWithoutAction,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { LOGIN_PATH } from "../routes/const";
import React from "react";
import { SearchContext } from "./SearchContext";
import { User } from "../api/userTypes";
import { number } from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { userPut } from "../api/user";

interface ShowContextProps {
  pick: string;
  color: string;
  setPick: any;
  setColor: any;
  user: User | null;
  setUser: (value: User | ((val: User | null) => User | null) | null) => void;
  handleLogIn: (user: User) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowContext = createContext<ShowContextProps>({
  pick: "images",
  setPick: "",
  color: "white",
  setColor: "",
  user: null,
  page: 1,
  setPage: () => number,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: (user: User) => {},
  handleLogOut: () => {},
});

const ShowProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState(1);
  const [pick, setPick] = useState("images");
  const [color, setColor] = useState("light");
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const navigate = useNavigate();

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    const userObjectString = localStorage.getItem("user");
    if (!userObjectString) {
      throw new Error("User object not found in local storage.");
    }
    const userObject = JSON.parse(userObjectString);
    if (typeof userObject.images_likes !== "string") {
      userObject.images_likes = JSON.stringify(userObject.images_likes);
    }

    if (typeof userObject.videos_likes !== "string") {
      userObject.videos_likes = JSON.stringify(userObject.videos_likes);
    }
    console.log(userObject);
    userPut(userObject);
    setColor("light");
    setUser(null);
    navigate(LOGIN_PATH);
  };

  const handleLogIn = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    setPage(1);
  }, [pick]);

  return (
    <ShowContext.Provider
      value={{
        pick,
        setPick,
        setColor,
        color,
        user,
        isLoggedIn,
        setUser,
        handleLogOut,
        handleLogIn,
        page,
        setPage,
      }}>
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContext, ShowProvider };
