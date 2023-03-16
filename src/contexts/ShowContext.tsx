import { PropsWithChildren, ReactNode, createContext, useState } from "react";
import { User, UserLogin } from '../api/uerTypes';

import { useLocalStorage } from "../hooks/useLocalStorage";

interface ShowContextProps {
  pick: string;
  color: string;
  setPick: any;
  setColor: any
  user: UserLogin | null;
  setUser: (user: UserLogin) => void;
  handleLogIn: (user: UserLogin) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
}

const ShowContext = createContext<ShowContextProps>({
  pick: 'images',
  setPick: '',
  color: 'white',
  setColor: '',
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {}, });

const ShowProvider = ({ children }: PropsWithChildren) => {
  const [pick, setPick] = useState('images')
  const [color, setColor] = useState('light')
  const [user, setUser] = useLocalStorage<UserLogin | null>('user', null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  const handleLogIn = (user: UserLogin) => {
    setUser(user)
  }
  
  return (
    <ShowContext.Provider value={{ pick, setPick, setColor, color, user, isLoggedIn, setUser, handleLogOut, handleLogIn }}>
      {children}
    </ShowContext.Provider>
  );
};

export {ShowContext, ShowProvider}