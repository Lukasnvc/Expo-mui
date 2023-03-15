import { ReactNode, createContext, useState } from "react";

interface ShowContextProps {
  pick: string;
  color: string;
  setPick: any;
  setColor: any
}

const ShowContext = createContext<ShowContextProps>({ pick: 'images', setPick: '', color: 'white', setColor: ''});

const ShowProvider = ({ children }: { children: ReactNode }) => {
  const [pick, setPick] = useState('images')
  const [color, setColor] = useState('light')
  
  return (
    <ShowContext.Provider value={{ pick, setPick, setColor, color }}>
      {children}
    </ShowContext.Provider>
  );
};

export {ShowContext, ShowProvider}