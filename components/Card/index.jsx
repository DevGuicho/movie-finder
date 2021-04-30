import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardUI, CardBody, DetailBtn } from './ui'
import useFavorites from '../../hooks/useFavorites'
import FavoriteButton from '../FavoriteButton'

const Card = ({ description, title, bgImage, id, mediaType, isOnResults }) => {
  const { isFavorite, deleteFavorite, addFavorite } = useFavorites({ id })

  const router = useRouter()
  const imgUrl = bgImage
    ? `https://image.tmdb.org/t/p/original/${bgImage}`
    : '/img/no-cover.jpg'
  const handleDetail = (e) => {
    router.push(`/detail/${id}?mediaType=${mediaType}`)
  }

  const handleLike = () => {
    if (isFavorite) {
      return deleteFavorite({ id })
    }
    addFavorite({
      favorite: { description, title, bgImage, id, mediaType }
    })
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
          <FavoriteButton isFavorite={isFavorite} handleClick={handleLike} />
          <DetailBtn onClick={handleDetail}>
            <i></i>
          </DetailBtn>
        </div>
      </CardBody>
    </CardUI>
  )
}

export default Card
