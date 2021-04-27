import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Slider = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0;
  overflow-x: auto;
  gap: 20px;
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
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
  position: relative;
  max-width: 95%;
  margin: 20px auto;
  h2 {
    color: var(--yellow);
  }
`

export const ButtonSlider = styled.button`
  opacity: 0;
  position: absolute;
  top: 17%;
  z-index: 2;
  height: 300px;
  width: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: opacity 450ms;
  cursor: pointer;
  ${(props) =>
    props.right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};

  i {
    font-family: 'solid icon';
  }
  &:hover {
    opacity: 1;
  }
`
