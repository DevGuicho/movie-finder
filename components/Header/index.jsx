import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`
const LogoHeader = styled.a`
  color: #ffcc29;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const Button = styled.a`
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

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>
          <Link href='/'>
            <LogoHeader>Movie Finder</LogoHeader>
          </Link>
        </h1>
      </div>
      <div>
        <Link href='/'>
          <Button>Sign In</Button>
        </Link>
        <Link href='/'>
          <Button outline>Sign Up</Button>
        </Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
