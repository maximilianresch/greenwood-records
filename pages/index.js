import Home from "./sections/Home/Home";
import Navigation from "./sections/Navigation/Navigation";
import Studio from "./sections/Studio/Studio";
import Head from "next/head";
import Equipment from "./sections/Equipment/Equipment";
import Services from "./sections/Services/Services";
import BackToTop from "../components/backToTop";
import Footer from "./sections/Footer/Footer";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import MapSection from "../components/Map/Map";
import styles from "./index.module.css";

const location = {
  lat: 48.472892,
  lng: 15.586909,
};

export default function App() {
  return (
    <div>
      <Head>
        <title>greenwoodrecords - Tonstudio</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
          shrink-to-fit="no"
        />
        <meta
          name="description"
          content="Tonstudio - Musikproduktion. Greenwoodrecords ist der perfekte Standort für ihre Aufnahmen. Wir freuen uns über jedes Genre, egal ob Pop, Klassik, Jazz, Rock."
        />
      </Head>
      <Home />
      <div className={styles.content}>
        <Navigation />
        <Studio />
        <Equipment />
        <Services />
        <Gallery />
        <MapSection location={location} zoomLevel={17} />
        <Contact />
        <br />
        <BackToTop />
      </div>

      <Footer />
    </div>
  );
}
