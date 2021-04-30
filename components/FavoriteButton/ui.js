import styled from '@emotion/styled'
import { css } from '@emotion/react'

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
