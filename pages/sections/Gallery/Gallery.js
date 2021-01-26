import React from "react";
import styles from "./Gallery.module.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../../../public/marc-fanelli-isla-xo4ValczbuA-unsplash.jpg'

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
    img: image,
    title: "placeholder",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "placeholder",
    author: "author",
    cols: 2,
  },
  {
    img: image,
    title: "placeholder",
    author: "author",
    cols: 3,
  },
  {
    img: image,
    title: "placeholder",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "placeholder",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "placeholder",
    author: "author",
    cols: 1,
  },
];


// maybe add onHover to see the title


export default function Gallery() {
  const classes = useStyles();

  return (

    
    <div id="myModal" id="gallery">
      <h2  className={styles.separator}> Galerie</h2>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} id="myImg" /> 
              <GridListTileBar
              title={tile.title}
              titlePosition="bottom" />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
    
  );
}
