import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import styles from "./Contact.module.css";
import img from "../../../public/ContactImage-min.jpg"

import pressImg from "../../../public/presseFoto-min.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Contact() {
  const classes = useStyles()
  return (
    <div id="contact">
      <h2>Kontakt</h2>
      <div className={styles.contactSection}>
        <div>
          <Card className={styles.aboutMeCard}>
            <CardMedia className={styles.media}>
                <Image
                src={img}
                  layout="responsive"
                  width={290}
                  height={280}
                  alt="Foto von Fabian Hainzl"
                />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Fabian Hainzl
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Tonmeister</b>
                <br />
                <br />
                Meine jahrelange Erfahrung als Musiker hilft mir in der Arbeit
                als Tonmeister und Produzent. Des weiteren belege ich das
                Tonmeisterstudium an der Universität für Musik und darstellende
                Kunst Wien.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <address className={styles.info}>
          <div className={styles.contactUs}>
            Wir freuen uns auf Ihre Nachricht!
          </div>
          <div>Tonstudio</div>
          <div>Fabian Hainzl</div>
          <div>Gföhlerstraße 34</div>
          <div>A-3552 Lengenfeld</div>
          <div>
            Tel: <a href="tel: +43 699 17007298">+43 660 3002487 </a>
          </div>
          <div>
            e-mail:{" "}
            <a
              href="mailto:office@greenwoodrecords.at?subject=greenwoodrecords%20Anfrage"
              target="_blank"
            >
              office@greenwoodrecords.at
            </a>{" "}
          </div>
        </address>
      </div>
      <div>
        <h3 style={{ textAlign: "center", paddingTop: "50px", fontSize: "38px" }}>Medien</h3>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
          <Image src={pressImg} layout="responsive" width={300} height={270} alt="Foto vom Presse Artikel (meinbezirk.at)"/>
        </CardMedia>
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
        </div>
      </div>
  );
}
