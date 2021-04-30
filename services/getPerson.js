import fetch from 'isomorphic-fetch'
import { apiKey, baseUrl } from '../config'

const getPerson = async ({ id }) => {
  const res = await fetch(
    `${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`
  )
  const data = await res.json()

  const generalInfo = {
    id: data.id,
    name: data.name,
    birthday: data.birthday,
    placeOfBirth: data.place_of_birth,
    profileImage: data.profile_path,
    biography: data.biography
  }

  return generalInfo
}

export default getPerson
