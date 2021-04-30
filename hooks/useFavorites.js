import { useContext, useEffect, useState } from 'react'
import ContextFavorite from '../context/contextFavorite'

const useFavorites = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, favorites, deleteFavorite } = useContext(ContextFavorite)

  useEffect(() => {
    setIsFavorite(favorites.find((fav) => fav.id === id))
  }, [favorites])

  return { addFavorite, favorites, deleteFavorite, isFavorite }
}

export default useFavorites
