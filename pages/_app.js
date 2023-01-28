import Home from '.'
import '../style/style.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Home {...pageProps} />
}
