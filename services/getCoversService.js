import fetch from 'isomorphic-fetch'
import { baseUrl, apiKey } from '../config'
import getData from './getData'

const getCoversService = async () => {
  const mediaTypes = ['all', 'movie', 'person', 'tv']

  const res = mediaTypes.map((media) =>
    fetch(`${baseUrl}/trending/${media}/day?api_key=${apiKey}`)
  )
  const data = await Promise.all(res)

  const dataPromise = data.map((res) => res.json())
  const [allTrends, movieTrends, peopleTrends, tvTrends] = await Promise.all(
    dataPromise
  )

  return {
    allTrends: allTrends.results.map((trend) =>
      getData({ mediaType: trend.media_type, res: trend })
    ),
    movieTrends: movieTrends.results.map((trend) =>
      getData({ mediaType: trend.media_type, res: trend })
    ),
    peopleTrends: peopleTrends.results.map((trend) =>
      getData({ mediaType: trend.media_type, res: trend })
    ),
    tvTrends: tvTrends.results.map((trend) =>
      getData({ mediaType: trend.media_type, res: trend })
    )
  }
}

export default getCoversService
