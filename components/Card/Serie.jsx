import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardUI, CardBody, LikeBtn, DetailBtn } from './ui'
import useData from './useData'

const Serie = ({ data }) => {
  const router = useRouter()
  const { description, id, title, posterPath } = useData({
    mediaType: 'tv',
    data
  })
  const handleDetail = (e) => {
    router.push(`/detail/${id}?mediaType=tv`)
  }

  return (
    <CardUI>
      <Image
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt={description}
      />
      <CardBody>
        <h5>{title}</h5>
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

export default Serie
