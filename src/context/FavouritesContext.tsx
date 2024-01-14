import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { KAVE_FAVOURITES } from '@/src/constants';

type FavouritesContextType = {
  favouritesList: string[];
  manageFavourites: (element: string) => void;
};

const defaultContextValue: FavouritesContextType = {
  favouritesList: [],
  manageFavourites: () => {},
};

const FavouritesContext =
  createContext<FavouritesContextType>(defaultContextValue);

export const useFavourites = (): FavouritesContextType => {
  return useContext(FavouritesContext);
};

type FavouritesProviderProps = {
  children: ReactNode;
};

export const FavouritesProvider = ({ children }: FavouritesProviderProps) => {
  const [favouritesList, setFavouritesList] = useState<string[]>([]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem(KAVE_FAVOURITES);
    if (savedFavourites) {
      const favouritesArray: string[] = JSON.parse(savedFavourites);
      setFavouritesList(favouritesArray || []);
    }
  }, []);

  const manageFavourites = (element: string): void => {
    let updatedFavouritesList: string[];

    if (favouritesList.includes(element)) {
      // Element exists, remove it
      updatedFavouritesList = favouritesList.filter((item) => item !== element);
    } else {
      // Element does not exist, add it
      updatedFavouritesList = [...favouritesList, element];
    }

    localStorage.setItem(
      KAVE_FAVOURITES,
      JSON.stringify(updatedFavouritesList)
    );
    setFavouritesList(updatedFavouritesList);
  };

  return (
    <FavouritesContext.Provider value={{ favouritesList, manageFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
