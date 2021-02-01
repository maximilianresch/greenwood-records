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
    caption: "",
    key: "2",
    
  },
  {
    src: img,
    altText: "Slide 3",
    caption: "",
    key: "3",
  },
  {
    src: img1,
    altText: "Slide 4",
    caption: "",
    key: "4",
  },
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items} className={styles.image} />
    </div>
  );
}

export default Home;


