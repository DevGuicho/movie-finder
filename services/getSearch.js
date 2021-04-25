import fetch from 'isomorphic-fetch'
import { apiKey, baseUrl } from '../config'
import getData from './getData'

const getSearch = async ({ filter = 'multi', keyword }) => {
  const url = `${baseUrl}/search/${filter}?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`
  const res = await fetch(url)
  const { results, page } = await res.json()

  const data =
    filter === 'multi'
      ? results.map((res) => getData({ mediaType: res.media_type, res }))
      : results.map((res) => getData({ mediaType: filter, res }))
  return { results: data, page }
}

export default getSearch
