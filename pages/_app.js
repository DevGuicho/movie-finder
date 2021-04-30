import StateFavorite from '../context/stateFavorite'

function MyApp({ Component, pageProps }) {
  return (
    <StateFavorite>
      <Component {...pageProps} />
    </StateFavorite>
  )
}

export default MyApp
