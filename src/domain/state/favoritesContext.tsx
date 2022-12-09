/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, ReactNode, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArtWork } from '../models/Artwork';

const initialState: State = {
  items: [],
};

type State = {
  items: ArtWork[];
};

export type ContextData = {
  state: State;
  dispatch: Dispatch<Action>;
};

export type Action = { type: 'updateFavorites'; payload: ArtWork[] };

export const FavoritesContext = React.createContext<ContextData>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'updateFavorites': {
      const items = action.payload;
      const jsonValue = JSON.stringify(items);
      AsyncStorage.setItem('favorites', jsonValue);
      return { ...state, items: action.payload };
    }
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStoreContext = async () => {
    const jsonValue = await AsyncStorage.getItem('favorites');
    if (jsonValue === null) {
      return [];
    }
    const list: ArtWork[] = JSON.parse(jsonValue);
    return list;
  };

  const getContextData = async () => {
    const storeContext = await getStoreContext();
    dispatch({
      type: 'updateFavorites',
      payload: storeContext,
    });
  };

  useEffect(() => {
    getContextData();
  }, []);
  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
