import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const HeaderC = styled.header`
  position: relative;
  z-index: 20;
  height: 70px;

  ${(props) =>
    props.isDetail &&
    css`
      background: rgba(0, 0, 0, 0.5);
    `}
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 0 auto;
`
export const LogoHeader = styled.a`
  color: #ffcc29;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

export const Button = styled.a`
  padding: 6px 8px;
  background-color: var(--yellow);
  margin-right: 10px;
  border: 2px solid var(--yellow);
  cursor: pointer;
  &:last-of-type {
    margin: 0%;
  }
  ${(props) =>
    props.outline &&
    css`
      background: none;
      border: 2px solid var(--yellow);
      color: var(--yellow);
    `}
`
