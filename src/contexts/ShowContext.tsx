import {
  DispatchWithoutAction,
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { User, UserLogin } from "../api/uerTypes";

import React from "react";
import { number } from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ShowContextProps {
  pick: string;
  color: string;
  setPick: any;
  setColor: any;
  user: UserLogin | null;
  setUser: (user: UserLogin) => void;
  handleLogIn: (user: UserLogin) => void;
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
  handleLogIn: () => {},
  handleLogOut: () => {},
});

const ShowProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState(1);
  const [pick, setPick] = useState("images");
  const [color, setColor] = useState("light");
  const [user, setUser] = useLocalStorage<UserLogin | null>("user", null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  const handleLogIn = (user: UserLogin) => {
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
