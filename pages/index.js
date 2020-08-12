import Home from './sections/Home';
import Navigation from './sections/Navigation';
import Studio from './sections/Studio';
import Head from 'next/head';

export default function App() {
  return (
    <div>
    <Head>
    <title>greenwoodrecords</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
    </Head>
      <Home />
      <Navigation />
      <Studio />
    </div>
  )
}
