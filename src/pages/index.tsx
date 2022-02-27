import Head from 'next/head'

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Index | Skeleton</title>
        <meta name="description" content="Index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        This is the index page 🔥
        <div>Happy coding 😉</div>
      </main>
    </div>
  )
}
