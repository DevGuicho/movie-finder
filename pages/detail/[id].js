/* eslint-disable multiline-ternary */
import React from 'react'

import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import MovieDetail from '../../components/MovieDetail'
import PersonDetail from '../../components/PersonDetail'

const Keyoword1 = () => {
  const router = useRouter()
  const { id, mediaType } = router.query
  const intId = parseInt(id)
  return (
    <Layout isDetail>
      {mediaType === 'person' ? (
        <PersonDetail id={intId} />
      ) : (
        <MovieDetail id={intId} mediaType={mediaType} />
      )}
    </Layout>
  )
}

export default Keyoword1
