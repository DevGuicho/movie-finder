/* eslint-disable multiline-ternary */
import React from 'react'

import Layout from '../../components/Layout'
import MovieDetail from '../../components/MovieDetail'
import PersonDetail from '../../components/PersonDetail'
import getDetails from '../../services/getDetails'

const Keyoword1 = ({ results }) => {
  const { id, mediaType } = results
  const intId = parseInt(id)
  return (
    <Layout isDetail={mediaType !== 'person'}>
      {mediaType === 'person' ? (
        <PersonDetail id={intId} info={results} />
      ) : (
        <MovieDetail id={intId} info={results} />
      )}
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id, mediaType } = query
  const results = await getDetails({ id, mediaType })

  return {
    props: { results }
  }
}

export default Keyoword1
