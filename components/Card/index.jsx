import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardUI, CardBody, LikeBtn, DetailBtn } from './ui'

const Card = ({ description, title, bgImage, id, mediaType, isOnResults }) => {
  const router = useRouter()
  const imgUrl = bgImage
    ? `https://image.tmdb.org/t/p/original/${bgImage}`
    : '/img/no-cover.jpg'
  const handleDetail = (e) => {
    router.push(`/detail/${id}?mediaType=${mediaType}`)
  }

  return (
    <CardUI className='card'>
      <Image
        src={imgUrl}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt={description}
      />
      <CardBody className='cardFooter' isOnResults={isOnResults}>
        <h5>{title}</h5>
        <div className='infoCard'>
          <LikeBtn>
            <i></i>
          </LikeBtn>
          <DetailBtn onClick={handleDetail}>
            <i></i>
          </DetailBtn>
        </div>
      </CardBody>
    </CardUI>
  )
}

export default Card
