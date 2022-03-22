import React, { useEffect } from 'react'
import Head from 'next/head'
import { Button } from '@components'
import FavIcon from '@public/assets/imgs/avatar.svg'
import { theme } from '@utils'
import { fetchData } from '@services'
import styled from 'styled-components'

const MainContainer = styled.main`
  padding: 1rem 2rem;
  & div {
    padding: 0.5rem 0;
  }
`

const Home = () => {
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="home">
      <Head>
        <title>Index | Skeleton</title>
        <meta name="description" content="Index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        This is the awesome Next JS template🔥
        <Button label="hello">Say Hello</Button>
        <div>
          <FavIcon />
        </div>
        <div>{theme.base}</div>
        <div>Happy coding 😉</div>
      </MainContainer>
    </div>
  )
}

export default Home
