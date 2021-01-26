import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import styles from './Home.module.css';
import img from "../../../public/undraw_compose_music_ovo2.svg";
import img1 from "../../../public/undraw_happy_music_g6wc.svg";
import img2 from "../../../public/undraw_more_music_w70e.svg";
import img3 from '../../../public/greenwoodrecords-logo.png';


const items = [
  {
    src: img3,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
    
  },
  {
    src: img1,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
    
  },
  {
    src: img2,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
  {
    src: img,
    altText: "Slide 4",
    caption: "Slide 4",
    header: "Slide 4 Header",
    key: "4",
  },
];

function Home() {
  return (
    <div>
      <UncontrolledCarousel items={items} className={styles.image}/>
    </div>
  );
}

export default Home;


