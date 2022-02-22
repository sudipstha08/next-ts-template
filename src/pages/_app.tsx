import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyles } from '../styles/globalStyles'

const queryClient = new QueryClient({ defaultOptions: {} })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        {tests}
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
