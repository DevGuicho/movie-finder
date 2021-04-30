import React, { useRef } from 'react'
import Card from '../Card'
import { Slider, ListOfCardsContainer, SliderItem, ButtonSlider } from './ui'

const ListOfCards = ({ title, cards, isFavorite }) => {
  const myRef = useRef(null)

  const handleRight = () => {
    if (myRef.current.scrollLeft >= myRef.current.scrollWidth) return

    myRef.current.scrollLeft = myRef.current.scrollLeft + 500
  }
  const handleLeft = () => {
    if (myRef.current.scrollLeft <= 0) return

    myRef.current.scrollLeft = myRef.current.scrollLeft - 500
  }
  return (
    <ListOfCardsContainer>
      <h2>{title}</h2>
      <ButtonSlider onClick={handleLeft}>
        <i></i>
      </ButtonSlider>
      <ButtonSlider right onClick={handleRight}>
        <i></i>
      </ButtonSlider>
      <Slider ref={myRef}>
        {cards.map((trend) => (
          <SliderItem key={trend.id}>
            <Card
              mediaType={trend.mediaType}
              bgImage={trend.bgImage}
              id={trend.id}
              description={trend.description}
              title={trend.title}
              isFavorite={isFavorite}
            />
          </SliderItem>
        ))}
      </Slider>
    </ListOfCardsContainer>
  )
}

export default ListOfCards
