import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import getMovie from '../../services/getMovie'
import useFavorites from '../../hooks/useFavorites'
import FavoriteButton from '../FavoriteButton'

const DetailContainer = styled.main`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  img {
    z-index: 1;
  }
`

const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: -70px;
`
const InfoContainer = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  z-index: 2;
  width: 95%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: white;

  h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }
  p {
    text-align: left;
  }
  .wrap {
    width: 100%;
    padding: 20px;
    max-width: 700px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const MovieDetail = ({ id, mediaType }) => {
  const [movie, setMovie] = useState({
    title: '',
    bgImage: '',
    description: '',
    posterImage: '',
    heroImage: '',
    duration: null,
    genres: [],
    releaseDate: ''
  })

  const { title, description, heroImage, bgImage } = movie
  const { isFavorite, deleteFavorite, addFavorite } = useFavorites({
    id
  })

  useEffect(() => {
    if (id) {
      getMovie({ id, mediaType }).then((movie) => {
        setMovie({ ...movie })
        console.log(movie)
      })
    }
  }, [id])

  const handleLike = () => {
    if (isFavorite) {
      return deleteFavorite({ id })
    }
    addFavorite({
      favorite: { description, title, bgImage, id, mediaType }
    })
  }
  return (
    <DetailContainer>
      <ImgContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original/${heroImage}`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={description}
        />
      </ImgContainer>
      <InfoContainer>
        <div className='wrap'>
          <h2>{title}</h2>
          <span>{movie.duration} mins</span>
          {movie.genres.map((gen, index) => (
            <span key={index}> {gen.name} </span>
          ))}
          <p>{description}</p>
          <FavoriteButton isFavorite={isFavorite} handleClick={handleLike} />
        </div>
      </InfoContainer>
    </DetailContainer>
  )
}

export default MovieDetail
