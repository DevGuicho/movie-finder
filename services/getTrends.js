import fetch from 'isomorphic-fetch'
import { baseUrl } from '../config'
import getData from './getData'

export const getTrends = async ({ category }) => {
  const url = `${baseUrl}/trending/${category}/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  const res = await fetch(url)

  const { results, page } = await res.json()
  const data = results.map((res) => getData({ mediaType: res.media_type, res }))

  return { data, page }
}
