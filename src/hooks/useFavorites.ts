import { useContext } from 'react';
import { ArtWork } from 'src/domain/models/Artwork';
import { FavoritesContext } from 'src/domain/state/favoritesContext';

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  const state = context.state;
  const updateStateFavItems = (items: ArtWork[]) => {
    context.dispatch({
      type: 'updateFavorites',
      payload: items,
    });
  };
  return { state, updateStateFavItems };
};
