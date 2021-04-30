import React from 'react'
import Image from 'next/image'
import { Detail, ImageContainer, InfoContainer } from './ui'

const PersonDetail = ({ info }) => {
  const { profileImage, name, birthday, biography } = info
  return (
    <Detail>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original/${profileImage}`}
          layout='responsive'
          width={300}
          height={400}
          objectFit='cover'
          objectPosition='center'
          alt={name}
        />
      </ImageContainer>
      <InfoContainer>
        <h2>{name}</h2>
        <p>{birthday}</p>
        <p className='bio'>{biography}</p>
      </InfoContainer>
    </Detail>
  )
}

export default PersonDetail
