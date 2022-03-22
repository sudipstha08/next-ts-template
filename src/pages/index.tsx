import React, { useEffect } from 'react'
import Head from 'next/head'
import { Button } from '@src/components'
import FavIcon from '@public/assets/imgs/avatar.svg'
import { test } from '@utils'
import { fetchData } from '@services'

const Home = () => {
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="home">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        This is the index page 🔥
        <div>Happy coding 😉</div>
        <Button label="hello">Say Hello</Button>
        <FavIcon />
        {test}
      </main>
    </div>
  )
}

export default Home
