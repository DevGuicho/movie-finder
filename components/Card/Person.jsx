import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardUI, CardBody, LikeBtn, DetailBtn } from './ui'

const Person = ({ overview, originalTitle, posterPath, id, mediaType }) => {
  const router = useRouter()

  const handleDetail = (e) => {
    router.push(`/detail/${id}?mediaType=${mediaType}`)
  }

  return (
    <CardUI>
      <Image
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt={overview}
      />
      <CardBody>
        <h5>{originalTitle}</h5>
        <LikeBtn>
          <i></i>
        </LikeBtn>
        <DetailBtn onClick={handleDetail}>
          <i></i>
        </DetailBtn>
      </CardBody>
    </CardUI>
  )
}

export default Person
