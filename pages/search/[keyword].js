/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
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
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  justify-items: center;
  gap: 20px;
`

const SearchResult = () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()
  const { keyword = '', filter } = router.query

  useEffect(() => {
    getSearch({ filter, keyword })
      .then((res) => {
        setIsLoading(false)
        setResults(res.results)
      })
      .catch((error) => setError(error))
  }, [results])

  if (error) return <h1>Ha habido un error</h1>
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
              {isLoading ? (
                <p>Is Loading</p>
              ) : (
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
              )}
            </>
          )}
        </section>
      </SearchResultContainer>
    </Layout>
  )
}

export default SearchResult
