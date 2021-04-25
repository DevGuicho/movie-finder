const getData = ({ mediaType, res }) => {
  switch (mediaType) {
    case 'movie':
      return {
        bgImage: res.poster_path,
        id: res.id,
        description: res.overview,
        title: res.original_title,
        mediaType
      }

    case 'tv':
      return {
        bgImage: res.poster_path,
        id: res.id,
        description: res.overview,
        title: res.name,
        mediaType
      }

    case 'person':
      return {
        bgImage: res.profile_path,
        id: res.id,
        description: res.name,
        title: res.name,
        mediaType
      }
  }
}
export default getData
