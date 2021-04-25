import React from 'react'
import Card from '../Card'
import { Slider, ListOfCardsContainer } from './ui'

const ListOfCards = ({ title, cards }) => {
  return (
    <ListOfCardsContainer>
      <h2>{title}</h2>
      <Slider>
        {cards.map((trend) => (
          <Card
            key={trend.id}
            mediaType={trend.mediaType}
            bgImage={trend.bgImage}
            id={trend.id}
            description={trend.description}
            title={trend.title}
          />
        ))}
      </Slider>
    </ListOfCardsContainer>
  )
}

export default ListOfCards
