import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import img from "../../../public/Gallery/couch-min.jpg";
import img1 from "../../../public/Gallery/Flügel-min.jpg";
import img3 from "../../../public/Gallery/GalerieFoto1-min.jpg";
import img4 from "../../../public/Gallery/Serverraum-min.jpg";
import img5 from "../../../public/Gallery/GalerieFoto2-min.jpg";
import useResponsive from '../../../helper/useResponsive';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: "50px",
    paddingBottom: "40px",
    backgroundColor: "inherit"
  },
  gridList: {
    flexWrap: 'nowrap',
  },
}));
const tileData = [
  {
    img: img,
    alt: "Couch im Studio",
  },
  {
    img: img1,
    alt: "Foto von Flügel im Aufnahmeraum 1",
  },
  {
    img: img3,
    alt: "Galeriefoto",
  },
  {
    img: img4,
    alt: "Foto vom PC im Rack bezieungsweise vom Serveraum",
  },
  {
    img: img5,
    alt: "Galeriefoto",
  },
];

// maybe add onHover to see the title

export default function Gallery() {
  const {isDesktop} = useResponsive();
  const classes = useStyles();

  return (
    <div id="gallery" >
    <h2>Galerie</h2>
    {isDesktop && 
    (<div className={classes.root} >
    
    <GridList cellHeight={350} className={classes.gridList} cols={2.1} >
      {tileData.map((tile) => (
        <GridListTile key={tile.img}>
          <img src={tile.img} alt={tile.alt} />
        </GridListTile>
      ))}
    </GridList>
  </div>
  )} {!isDesktop && (
    <div className={classes.root} >
    
      <GridList cellHeight={350} className={classes.gridList} cols={1.2} >
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.alt} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )}
    
    </div>
  );
}
