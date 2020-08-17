import Home from "./sections/Home/Home";
import Navigation from "../pages/sections/Navigation/Navigation";
import Studio from "./sections/Studio/Studio";
import Head from "next/head";
import Equipment from "./sections/Equipment/Equipment";
import Services from "./sections/Services/Services";
import BackToTop from "../components/backToTop";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <div style={{ padding: 15 }}>
      <Head>
        <title>greenwoodrecords</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
          shrink-to-fit="no"
        />
        <meta property="og:title" content="My page title" key="title" />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>
      <Home />
      <Navigation />
      <h4 style={{ textAlign: "center", paddingTop: 30 }}>
        Kleiner text -> Kurze Beschreibung
      </h4>
      <Studio />
      <Equipment />
      <Services />   
      <Footer />
      <BackToTop />
    </div>
  );
}

// next big step to make it responsive
