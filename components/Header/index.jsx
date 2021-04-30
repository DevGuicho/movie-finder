import React from 'react'
import Link from 'next/link'
import { HeaderC, HeaderContainer, LogoHeader, Button } from './ui'

const Header = ({ isDetail }) => {
  return (
    <HeaderC isDetail={isDetail}>
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
    </HeaderC>
  )
}

export default Header
