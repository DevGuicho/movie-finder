/* eslint-disable multiline-ternary */
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
  margin: 0 auto;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-auto-rows: 300px;
  justify-content: center;
  justify-items: center;
  grid-gap: 20px;
`

const SearchResult = ({ results }) => {
  const router = useRouter()
  const { keyword } = router.query

  return (
    <Layout>
      <SearchResultContainer>
        <Search search={keyword.replace(/-/g, ' ')} />
        <section>
          {results.length === 0 ? (
            <h2>No hay resultados para esta busqueda</h2>
          ) : (
            <>
              <h2>Resultados para {keyword.replace(/-/g, ' ')}</h2>

              <ResultadosGrid>
                {results.map((card) => (
                  <Card
                    key={card.id}
                    mediaType={card.mediaType}
                    bgImage={card.bgImage}
                    id={card.id}
                    description={card.description}
                    title={card.title}
                    isOnResults
                  />
                ))}
              </ResultadosGrid>
            </>
          )}
        </section>
      </SearchResultContainer>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { keyword, filter } = query
  const { results, page } = await getSearch({ keyword, filter })
  return {
    props: { results, page }
  }
}

export default SearchResult
