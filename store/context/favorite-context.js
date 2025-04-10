import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});

function FavoriteContextProvider({ children }) {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealsIds((currentIds) => [...currentIds, id]);
    }

    function removeFavoriteIds(id) {
        setFavoriteMealsIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavoriteIds,
    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContextProvider