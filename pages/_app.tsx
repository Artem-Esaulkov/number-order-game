import '../styles/mainPage.scss'
import '../styles/inputs.scss'
import '../styles/mainDisplay.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
