import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const CardUI = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  transition: 450ms transform;
  img {
    z-index: 1;
  }
  &:hover .cardFooter {
    display: flex;
  }
`

export const CardBody = styled.div`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  h5 {
    width: 100%;
    font-size: 12px;
    margin-bottom: 12px;
  }
  .infoCard {
    display: flex;
    justify-content: flex-end;
  }
  @media (hover: none) {
    display: flex;
  }

  ${(props) =>
    props.isOnResults &&
    css`
      display: flex;
    `}
`
export const DetailBtn = styled.button`
  background-color: #0d6efd;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  i {
    font-family: 'solid icon';
    color: white;
  }
`
export const LikeBtn = styled.button`
  background-color: #198754;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  i {
    font-family: 'solid icon';
    color: white;
  }
  ${(props) =>
    props.isFavorite &&
    css`
      background-color: #dc3545;
    `}
`
