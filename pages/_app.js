import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Breaking Bad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
