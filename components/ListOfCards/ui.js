import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Section = styled.section`
  width: 100%;
  position: relative;
  h2 {
    width: 95%;
    margin: 0 auto;
    color: var(--yellow);
  }
`

export const Carousel = styled.section`
  position: relative;
  overflow: scroll;
  width: 95%;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`
export const CarouselContainer = styled.div`
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;

  &:hover .carousel-item {
    opacity: 0.3;
  }
  &:hover .carousel-item:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
  }
`

export const CarouselItem = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  &:hover ~ .carousel-item {
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
`

export const ButtonSlider = styled.button`
  opacity: 0;
  position: absolute;
  top: 125px;
  z-index: 2;
  height: 200px;
  width: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: opacity 450ms;
  cursor: pointer;
  ${(props) =>
    props.right
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `};

  i {
    font-family: 'solid icon';
  }
  &:hover {
    opacity: 1;
  }
`
