import React from 'react'
import Card from '../Card'
import { Slider, ListOfCardsContainer, SliderItem } from './ui'

const ListOfCards = ({ title, cards }) => {
  return (
    <ListOfCardsContainer>
      <h2>{title}</h2>
      <Slider>
        {cards.map((trend) => (
          <SliderItem key={trend.id}>
            <Card
              mediaType={trend.mediaType}
              bgImage={trend.bgImage}
              id={trend.id}
              description={trend.description}
              title={trend.title}
            />
          </SliderItem>
        ))}
      </Slider>
    </ListOfCardsContainer>
  )
}

export default ListOfCards
