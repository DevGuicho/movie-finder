import fetch from 'isomorphic-fetch'
import { apiKey, baseUrl } from '../config'

const getDetails = async ({ id, mediaType }) => {
  const data = await fetch(
    `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=en-US`
  )
  const res = await data.json()
  switch (mediaType) {
    case 'movie':
      return {
        heroImage: res.backdrop_path,
        bgImage: res.poster_path,
        genres: res.genres,
        homepage: res.homepage,
        id: res.id,
        originalLenguaje: res.original_language,
        description: res.overview,
        title: res.original_title,
        releaseDate: res.release_date,
        duration: res.runtime,
        mediaType
      }

    case 'tv':
      return {
        heroImage: res.backdrop_path,
        bgImage: res.poster_path,
        genres: res.genres,
        homepage: res.homepage,
        id: res.id,
        originalLenguaje: res.original_language,
        description: res.overview,
        title: res.original_name,
        seasons: res.seasons,
        type: res.type,
        mediaType
      }

    case 'person':
      return {
        id: res.id,
        name: res.name,
        birthday: res.birthday,
        placeOfBirth: res.place_of_birth,
        profileImage: res.profile_path,
        biography: res.biography,
        mediaType
      }
  }
}

export default getDetails
