import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <Link href='/'>
          <a>
            <h1>Movie Finder</h1>
          </a>
        </Link>
      </div>
      <div>
        <Link href='/'>
          <a>Login</a>
        </Link>
        <Link href='/'>
          <a>Sign Up</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
