import React from 'react'
import Image from 'next/image'
import getMovie from '../../services/getMovie'
import Layout from '../../components/Layout'
import styled from '@emotion/styled'

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

const DetailPage = ({ movie }) => {
  const { title, bgImage, description } = movie

  return (
    <Layout>
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
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id, mediaType } = query
  const movie = await getMovie({ id, mediaType })

  return { props: { movie } }
}
export default DetailPage
