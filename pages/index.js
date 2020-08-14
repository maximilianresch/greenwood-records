import Home from './sections/Home/Home';
import Navigation from '../pages/sections/Navigation/Navigation';
import Studio from './sections/Studio/Studio';
import Head from 'next/head';
import Equipment from './sections/Equipment/Equipment';
import Footer from './sections/Footer'
import Services from './sections/Services/Services';

export default function App() {
  return (
    <div style={{padding: 15}}>
    <Head>
    <title>greenwoodrecords</title>    
        <meta name="viewport" content="initial-scale=1, width=device-width" shrink-to-fit="no"/>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* try meta utf-8 and research what it is doing */}
    </Head>
      <Home />
      <Navigation />
      <h4 style={{textAlign: "center", paddingTop: 30}}>Kleiner text -> Kurze Beschreibung</h4>
      <Studio />
      <Equipment />
      <Services />
      <Footer />
    </div>
  )
}

// next big step to make it responsive
