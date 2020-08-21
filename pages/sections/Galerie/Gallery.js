import React from "react";
import styles from "./Gallery.module.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../../../public/undraw_happy_music_g6wc.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: 30,
  },
  gridList: {
    width: 700,
    height: 550,
  },
}));

const tileData = [
  {
    img: image,
    title: "oasch",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "fut",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "beidl",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "trink",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "ma nu a",
    author: "author",
    cols: 1,
  },
  {
    img: image,
    title: "seidl",
    author: "author",
    cols: 1,
  },
];

export default function Gallery() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={styles.separator}> Gallery</h2>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
              title={tile.title}
              titlePosition="top" />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
