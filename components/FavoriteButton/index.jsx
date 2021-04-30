/* eslint-disable multiline-ternary */
import React from 'react'

import { LikeBtn } from './ui'

const FavoriteButton = ({ handleClick, isFavorite }) => {
  return (
    <LikeBtn isFavorite={isFavorite} onClick={handleClick}>
      {isFavorite ? <i></i> : <i></i>}
    </LikeBtn>
  )
}

export default FavoriteButton
