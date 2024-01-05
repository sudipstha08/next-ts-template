import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
}

export default async function Home() {
  return (
    <main>
      <p>Next TS template</p>
    </main>
  )
}
