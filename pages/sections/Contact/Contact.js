import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./Contact.module.css";
import img from "../../../public/jamie-haughton-Z05GiksmqYU-unsplash.jpg";
import PressArticle from "../../components/PressArticle";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className={styles.separator}>Kontakt</h2>
      <div className={styles.contactSection}>
        <div>
          <Card className={styles.aboutMeCard}>
            <CardMedia
              className={styles.media}
              image={img}
              title="Fabian Hainzl"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Fabian Hainzl
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b> Tonmeister</b>
                <br />
                <br />
                "There are two kinds of companies, those that work to try to
                charge more and those that work to charge less. We will be the
                second."
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
            Tel: <a href="tel: +43 699 17007298">+43 699 17007298</a>
          </div>
          <div>
            e-mail:{" "}
            <a
              href="mailto:fhainzl88@gmail.com?subject=GreenwoodRecords%20Anfrage"
              target="_blank"
            >
              fhainzl88@gmail.com
            </a>{" "}
          </div>
        </address>
      </div>
      <div>
        <h2 style={{ textAlign: "center", paddingTop: "50px" }}>Medien</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <PressArticle />
        </div>
      </div>
    </div>
  );
}
