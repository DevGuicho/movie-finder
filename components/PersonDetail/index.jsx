import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import getPerson from '../../services/getPerson'
import { Detail, ImageContainer, InfoContainer } from './ui'

const PersonDetail = ({ id }) => {
  const [person, setPerson] = useState({
    id: null,
    name: '',
    birthday: '',
    placeOfBirth: '',
    profileImage: '',
    biography: ''
  })
  useEffect(() => {
    getPerson({ id }).then((person) => setPerson(person))
  }, [])
  return (
    <Detail>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original/${person.profileImage}`}
          layout='responsive'
          width={300}
          height={400}
          objectFit='cover'
          objectPosition='center'
          alt={person.name}
        />
      </ImageContainer>
      <InfoContainer>
        <h2>{person.name}</h2>
        <p>{person.birthday}</p>
        <p className='bio'>{person.biography}</p>
      </InfoContainer>
    </Detail>
  )
}

export default PersonDetail
