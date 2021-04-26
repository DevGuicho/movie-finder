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
  width: 100%;
  margin: 0 auto;
  background-color: #1a508b;
`

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/css/Global.css' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
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
