import React, { useContext } from 'react'
import ListOfCards from '../components/ListOfCards'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Search from '../components/Search'
import ContextFavorite from '../context/contextFavorite'
import getCoversService from '../services/getCoversService'

const HomeContainer = styled.main`
  max-width: 100%;
  overflow: hidden;
`

const Home = ({ trends }) => {
  const { favorites } = useContext(ContextFavorite)
  return (
    <Layout>
      <HomeContainer>
        <Search />
        {favorites.length > 0 && (
          <ListOfCards title='My List' cards={favorites} />
        )}

        <ListOfCards title='Trendigs' cards={trends.allTrends} />
        <ListOfCards title='Trendigs Movies' cards={trends.movieTrends} />
        <ListOfCards title='Trendigs Series' cards={trends.tvTrends} />
        <ListOfCards title='Trendigs People' cards={trends.peopleTrends} />
      </HomeContainer>
    </Layout>
  )
}

export async function getServerSideProps() {
  const trends = await getCoversService()
  return {
    props: { trends }
  }
}

export default Home
