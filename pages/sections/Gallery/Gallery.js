import React from "react";
import styles from "./Gallery.module.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import img from "../../../public/Gallery/couch.webp";
import img1 from "../../../public/Gallery/Flügel.webp";
import img3 from "../../../public/Gallery/GalerieFoto1.webp";
import img4 from "../../../public/Gallery/Serverraum.webp";
import img5 from "../../../public/Gallery/GalerieFoto2.webp";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: 50,
    paddingBottom: 50,
  },
  gridList: {
    width: 900,
    height: "auto",
  },
}));

const tileData = [
  {
    img: img,
    title: "Couch",
    cols: 1,
  },
  {
    img: img1,
    title: "Flügel",
    cols: 2,
  },
  {
    img: img3,
    title: "Galerie",
    cols: 1,
  },
  {
    img: img4,
    title: "placeholder",
    cols: 1,
  },
  {
    img: img5,
    title: "placeholder",
    cols: 1,
  },
];

// maybe add onHover to see the title

export default function Gallery() {
  const classes = useStyles();

  return (
    <div id="myModal" id="gallery">
      <h2 className={styles.separator}> Galerie</h2>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <Image
                src={tile.img}
                alt={tile.title}
                id="myImg"
                layout="fill"
                objectFit="cover"
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
