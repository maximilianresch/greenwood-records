import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "../public/presseFoto-min.jpg";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PressArticle() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img"
          alt="Presse Artikel von mein Bezirk (meinbezirk.at) mit Fabian Hainzl"
          height="280"
          image={img} />
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            meinbezirk.at
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tonmeister Fabian Hainzl lädt zu Aufnahmen in sein Studio.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          href="https://www.meinbezirk.at/krems/c-wirtschaft/tonmeister-fabian-hainzl-laedt-zu-aufnahmen-in-sein-studio_a4214442"
          target="_blank"
          size="small"
          color="primary"
        >
          Zum Artikel
        </Button>
      </CardActions>
    </Card>
  );
}
