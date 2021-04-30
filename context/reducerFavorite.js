import { ADD_FAVORITE, DELETE_FAVORITE } from './types'

const reducerFavorite = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload)
      }
    default:
      return state
  }
}

export default reducerFavorite
