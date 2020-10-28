import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./Contact.module.css";
import img from "../../../public/jamie-haughton-Z05GiksmqYU-unsplash.jpg";

export default function Contact() {
  return (
    <div>
      <h2 id="contact" className={styles.separator}>
        Kontakt
      </h2>
      <div className={styles.contactSection}>
        <div className={styles.info}>
          <div className={styles.contactUs}>
            Wir freuen uns auf Ihre Nachricht!
          </div>
          <div>Tonstudio</div>
          <div>Max Mustermann</div>
          <div>Gföhlerstraße xx</div>
          <div>A-3552 Lengenfeld</div>
          <div>Tel: +43 650 1234123</div>
          <div>e-mail: max.mustermann@gmail.com</div>
        </div>
        <div>
          <Card className={styles.aboutMeCard}>
            <CardMedia
              className={styles.media}
              image={img}
              title="Fabian Hainzl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Max Mustermann
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Tonmeister</b>
                <br />
                <br />
                "There are two kinds of companies, those that work to try to charge more and those that work to charge less. We will be the second."
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
