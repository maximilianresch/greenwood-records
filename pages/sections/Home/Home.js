import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import styles from './Home.module.css';
import img from "../../../public/Slider/Regie.webp";
import img1 from "../../../public/Slider/Aufnahmeraum1.webp";
import img2 from "../../../public/Slider/Aufnahmeraum1dark.webp";


const items = [
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
    
  },
  {
    src: img,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
  {
    src: img1,
    altText: "Slide 4",
    caption: "Slide 4",
    header: "Slide 4 Header",
    key: "4",
  },
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items} className="d-block w-100" className={styles.image} />
    </div>
  );
}

export default Home;


