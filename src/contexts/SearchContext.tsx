import { PropsWithChildren, createContext, useEffect, useState } from "react";

import { PixabayImage } from "../api/imageTypes";
import { fetchSearchImages } from "../api/images";
import { string } from "yup";
import { useSearchImage } from "../hooks/image";

interface SearchContextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>> | ((text: string) => string);
  data: object[];
  setData: React.Dispatch<React.SetStateAction<object[]>>;
}

const SearchContext = createContext<SearchContextProps>({
  text: "",
  setText: () => string,
  data: [],
  setData: () => [],
});

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState("");
  const [data, setData] = useState<any>([]);
  const { data: searchedData, isLoading } = useSearchImage(text);
  useEffect(() => {
    fetchSearchImages(text);
    !isLoading && setData(searchedData);

    if (text.length < 2) {
      setData([]);
    }
  }, [searchedData]);

  return (
    <SearchContext.Provider value={{ text, setText, data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
