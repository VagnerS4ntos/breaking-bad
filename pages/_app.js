import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import { GlobalStorage } from '../Storage/GlobalStorage';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStorage>
      <Head>
        <title>Breaking Bad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </GlobalStorage>
  );
}

export default MyApp;
