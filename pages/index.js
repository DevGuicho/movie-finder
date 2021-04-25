import React from 'react'
import ListOfCards from '../components/ListOfCards'
import Layout from '../components/Layout'
import { getTrends } from '../services/getTrends'
import styled from '@emotion/styled'
import Search from '../components/Search'

const HomeContainer = styled.main`
  max-width: 100%;
  overflow: hidden;
`

const Home = ({ trends }) => {
  return (
    <Layout>
      <HomeContainer>
        <Search />
        {trends.map((trend, index) => (
          <ListOfCards
            key={index}
            title={`Trendings ${trend.title}`}
            cards={trend.cards}
          />
        ))}
      </HomeContainer>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const trends = [
    getTrends({ category: 'all' }),
    getTrends({ category: 'movie' }),
    getTrends({ category: 'tv' }),
    getTrends({ category: 'person' })
  ]
  const [
    allTrends,
    moviesTrends,
    seriesTrends,
    peopleTrends
  ] = await Promise.all(trends)

  return {
    props: {
      trends: [
        { title: '', cards: allTrends.data },
        { title: 'Movies', cards: moviesTrends.data },
        { title: 'Series', cards: seriesTrends.data },
        { title: 'People', cards: peopleTrends.data }
      ]
    }
  }
}

export default Home
