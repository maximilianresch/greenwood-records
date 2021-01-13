import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import styles from "./Studio.module.css";
import room1 from "../../../public/room1.jpeg";
import kitchen from "../../../public/kitchen.jpeg";
import room3 from "../../../public/room3.jpeg";

// add (studio) img and make cards overlap it

export default function Studio() {
  return (
    <div style={{ paddingTop: 50 }}>
      <h2 id="studio" className={styles.separator}>
        Studio{" "}
      </h2>

      <br />
      <p>
        Aus einer alten Traktorgarage für unseren Weinbetrieb wurde mit viel
        Arbeit ein Tonstudio geschaffen. Der Bau war eine große Herausforderung
        und unterzog sich langer Planungszeit. Jetzt freuen wir uns das Studio
        so präsentieren zukönnen. Zwei Aufnahmeräume mit 45 m2 und 10 m2, sowie
        eine Regie mit 25 m2 und eine kleine Küche / WC umfassen das Gebäude.
        Aber die Erinnerungen an den Weinbetrieb und die Geschichte dieses
        Grundstückes bleiben nicht aus. Im alten Heurigenlokal beziehungsweise
        Weinkeller wartet ein großer Aufenthaltsraum mit großzügiger Bar und
        Küche, welcher ebenso zu einer weiteren Aufnahmemöglichkeit
        umfunktioniert werden kann. Dieser Raum bietet noch extra 100 m2. Das
        Studio und das Lokal sind per Video miteinander verbunden.
      </p>
      <br />
      <div className={styles.cards}>
        <CardDeck>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src={room1}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className={styles.title}>Room 1</CardTitle>
              <CardSubtitle>10m2</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src={kitchen}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className={styles.title}>Room 2</CardTitle>
              <CardSubtitle>20m2</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src={room3}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle className={styles.title}>Room 3</CardTitle>
              <CardSubtitle>30m2</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

// needs better styling -> cards padding between -> font, colors and breaks (line)
