import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
}

export default async function Home() {
  return (
    <main>
      <h1>Next TS template</h1>
      <p>Happy coding</p>
    </main>
  )
}
