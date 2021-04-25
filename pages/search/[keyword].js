import React from 'react'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import Search from '../../components/Search'
import getSearch from '../../services/getSearch'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const SearchResultContainer = styled.main`
  height: 100%;
`

const ResultadosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  gap: 20px;
`

const SearchResult = ({ results }) => {
  const router = useRouter()
  const { keyword } = router.query
  return (
    <Layout>
      <SearchResultContainer>
        <Search />
        <section>
          <h2>Resultados para {keyword}</h2>
          <ResultadosGrid>
            {results.map((card) => (
              <Card
                key={card.id}
                mediaType={card.mediaType}
                bgImage={card.bgImage}
                id={card.id}
                description={card.description}
                title={card.title}
              />
            ))}
          </ResultadosGrid>
        </section>
      </SearchResultContainer>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { filter, keyword } = query
  const { results } = await getSearch({ filter, keyword })
  return { props: { results } }
}

export default SearchResult
