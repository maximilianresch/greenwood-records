import Home from './sections/Home';
import Navigation from './sections/Navigation';
import Studio from './sections/Studio';
import Head from 'next/head';
import Equipment from './sections/Equipment';

export default function App() {
  return (
    <div style={{padding: 30}}>
    <Head>
    <title>greenwoodrecords</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" shrink-to-fit="no"/>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
      <Home />
      <Navigation />
      <h4 style={{textAlign: "center", paddingTop: 30}}>Kleiner text -> Kurze Beschreibung</h4>
      <Studio />
      <Equipment />
    </div>
  )
}

// next big step to make it responsive
