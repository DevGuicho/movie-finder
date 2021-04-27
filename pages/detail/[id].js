/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getMovie from '../../services/getMovie'
import Layout from '../../components/Layout'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const DetailContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    z-index: 1;
  }
`
const InfoContainer = styled.section`
  position: relative;
  z-index: 2;
  h2 {
    font-size: 48px;
  }
`

const DetailPage = () => {
  const [movie, setMovie] = useState({
    title: '',
    bgImage: '',
    description: ''
  })
  const [isLoading, setIsLoading] = useState(true)
  const { title, bgImage, description } = movie

  const router = useRouter()

  const { id, mediaType } = router.query

  useEffect(() => {
    getMovie({ id, mediaType }).then((movie) => {
      setIsLoading(false)
      setMovie({
        title: movie.title,
        bgImage: movie.bgImage,
        description: movie.description
      })
    })
  }, [])

  return (
    <Layout>
      {isLoading ? (
        <p>Is loading</p>
      ) : (
        <DetailContainer>
          <Image
            src={`https://image.tmdb.org/t/p/original/${bgImage}`}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            alt={description}
          />
          <InfoContainer>
            <h2>{title}</h2>
          </InfoContainer>
        </DetailContainer>
      )}
    </Layout>
  )
}

export default DetailPage
