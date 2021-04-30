import { useReducer } from 'react'
import ContextFavorite from './contextFavorite'
import reducerFavorite from './reducerFavorite'
import { ADD_FAVORITE, DELETE_FAVORITE } from './types'

const initialState = {
  favorites: []
}
const StateFavorite = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFavorite, initialState)

  const addFavorite = ({ favorite }) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: favorite
    })
  }

  const deleteFavorite = ({ id }) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: id
    })
  }
  return (
    <ContextFavorite.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        deleteFavorite
      }}
    >
      {children}
    </ContextFavorite.Provider>
  )
}

export default StateFavorite
