const useData = ({ results, mediaType }) => {
  let data = []
  switch (mediaType) {
    case 'movie':
      data = results.map((res) => ({
        bgImage: res.poster_path,
        id: res.id,
        description: res.overview,
        title: res.title,
        mediaType: res.media_type
      }))
      break
    case 'tv':
      data = results.map((res) => ({
        bgImage: res.poster_path,
        id: res.id,
        description: res.overview,
        title: res.name,
        mediaType: res.media_type
      }))
      break
    case 'person':
      data = results.map((res) => ({
        bgImage: res.profile_path,
        id: res.id,
        description: res.name,
        title: res.name,
        mediaType: res.media_type
      }))
      break
  }
}

export default useData
