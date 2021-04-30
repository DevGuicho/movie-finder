import { LikeBtn } from '../components/Card/ui'

const useBtnLike = () => {
  /* const [isFavorite, setIsFavorite] = useState(false)
  const [button, setButton] = useState(null)
  const { favorites, addFavorite, deleteFavorite } = useFavorites()

  useEffect(() => {
    setIsFavorite(favorites.find((fav) => fav.id === id))
    console.log('hola')
    if (isFavorite) {
      return setButton(
        <LikeBtn dislike onClick={handleDislike}>
          <i></i>
        </LikeBtn>
      )
    }

    return setButton(
      <LikeBtn>
        <i></i>
      </LikeBtn>
    )
  }, [favorites, isFavorite, id])

  const handleLike = () => {
    addFavorite({
      favorite: {
        description,
        title,
        bgImage,
        id,
        mediaType
      }
    })
    setIsFavorite(true)
  }

  const handleDislike = () => {
    deleteFavorite({ id })
    setIsFavorite(false)
  } */
  return (
    <LikeBtn>
      <i></i>
    </LikeBtn>
  )
}

export default useBtnLike
