import React from "react";
import Image from "next/image";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import Divider from "@material-ui/core/Divider";
import styles from "./Studio.module.css";
import img from "../../../public/Slider/Aufnahmeraum1dark.webp";
import img1 from "../../../public/Slider/Regie.webp";
import img2 from "../../../public/Aufnahmeraum2.webp";

// add (studio) img and make cards overlap it

export default function Studio() {
  return (
    <div style={{ paddingTop: 50 }} id="studio">
      <h2 className={styles.separator}>Studio </h2>

      <br />
      <p>
        Aus einer alten Traktorgarage für unseren Weinbetrieb wurde mit viel
        Arbeit ein Tonstudio geschaffen. Der Bau war eine große Herausforderung
        und unterzog sich langer Planungszeit. Jetzt freuen wir uns das Studio
        so präsentieren zukönnen. Zwei Aufnahmeräume mit 50 m<sup>2</sup> und 10
        m<sup>2</sup>, sowie eine Regie mit 25 m<sup>2</sup> und eine kleine
        Küche / WC umfassen das Gebäude. Aber die Erinnerungen an den
        Weinbetrieb und die Geschichte dieses Grundstückes bleiben nicht aus. Im
        alten Heurigenlokal beziehungsweise Weinkeller wartet ein großer
        Aufenthaltsraum mit großzügiger Bar und Küche, welcher ebenso zu einer
        weiteren Aufnahmemöglichkeit umfunktioniert werden kann. Dieser Raum
        bietet noch extra 100 m<sup>2</sup>. Das Studio und das Lokal sind per
        Video miteinander verbunden.
      </p>
      <br />
      <div className={styles.cards}>
        <CardDeck>
          <Card className={styles.card}>
            <Image
              className={styles.img}
              layout="responsive"
              width={300}
              height={270}
              src={img}
              alt="Aufnahmeraum 1"
            />
            <CardBody>
              <CardTitle className={styles.title}>Aufnahmeraum 1</CardTitle>
              <CardSubtitle>
                50 m<sup>2</sup>
              </CardSubtitle>
              <Divider />
              <CardText>
                Die lebhafte Akustik verleiht jeder Aufnahme einen natürlichen
                Klangcharakter. Es wurde in der Planung besonderes Augenmerk auf
                die Raumhöhe und das Volumen gelegt. Der Raum ist unter anderem
                perfekt geeignet für Bandaufnahmen mit mittelgroßer Besetzung.
              </CardText>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <Image
              className={styles.img}
              layout="responsive"
              width={280}
              height={290}
              src={img2}
              alt="Aufnahmeraum 2"
            />
            <CardBody>
              <CardTitle className={styles.title}>Aufnahmeraum 2</CardTitle>
              <CardSubtitle>
                10 m<sup>2</sup>
              </CardSubtitle>
              <Divider />
              <CardText>
                Der kleine Aufnahmeraum eignet sich perfekt für die Abschirmung
                einzelner Musikinstrumente. Von Flügel bis Schlagzeug findet
                alles in diesem Raum Platz.
              </CardText>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <Image
              className={styles.img}
              layout="responsive"
              width={300}
              height={270}
              src={img1}
              alt="Regie"
            />
            <CardBody>
              <CardTitle className={styles.title}>Regie</CardTitle>
              <CardSubtitle>
                25 m<sup>2</sup>
              </CardSubtitle>
              <Divider />
              <CardText>
                Die Regie bietet eine fabelhafte Akustik welche an die Monitore
                der Firma ATC angepasst ist. Es wurde besonders viel Zeit und
                Mühe in den bau der Regie investiert. Alle Möbel wurden
                Handangefertigt und bestehen aus massivem Eichenholz.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
