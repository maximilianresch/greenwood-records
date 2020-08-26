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
import room1 from '../../../public/room1.jpeg';
import kitchen from '../../../public/kitchen.jpeg'
import room3 from '../../../public/room3.jpeg'


// add (studio) img and make cards overlap it

export default function Studio() {
  return (
    <div style={{ paddingTop: 50 }}>
      <h2 id="studio" className={styles.separator}>Studio </h2>

      <br />
      <p>
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
        Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard
        Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll
        Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
        Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die
        elektronische Schriftbearbeitung geschafft (bemerke, nahezu
        unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset",
        welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie
        "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.
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
