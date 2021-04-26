import styled from '@emotion/styled'

export const Slider = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0;
  overflow-x: auto;
  gap: 20px;
`
export const SliderItem = styled.div`
  transition: 450ms all;
  &:hover .cardFooter {
    display: flex;
  }
  &:hover .card {
    transform: scale(1.2, 1.2) translate(20px);
  }
  &:hover {
    margin-right: 40px;
  }
`
export const ListOfCardsContainer = styled.section`
  max-width: 95%;
  margin: 20px auto;
  h2 {
    color: var(--yellow);
  }
`
