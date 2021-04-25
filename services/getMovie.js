import fetch from 'isomorphic-fetch'
import { apiKey, baseUrl } from '../config'

const getMovie = async ({ id, mediaType }) => {
  const res = await fetch(
    `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=en-US`
  )
  const data = await res.json()

  const generalInfo = {
    bgImage: data.backdrop_path,
    genres: data.genres,
    homepage: data.homepage,
    id: data.id,
    originalLenguaje: data.original_language,
    description: data.overview
  }

  const info =
    mediaType === 'movie'
      ? {
          ...generalInfo,
          title: data.original_title,
          posterImage: data.poster_path,
          releaseDate: data.release_date,
          duration: data.runtime
        }
      : {
          ...generalInfo,
          title: data.original_name,
          posterImage: data.poster_path,
          seasons: data.seasons,
          type: data.type
        }
  return info
}

export default getMovie