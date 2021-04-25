import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import styled from '@emotion/styled'
import Footer from '../Footer'

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 100vw;
  width: 95%;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/css/Global.css' />
      </Head>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default Layout
