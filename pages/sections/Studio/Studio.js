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
      <div className={styles.cards}>
        <CardDeck>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Room 1</CardTitle>
              <CardSubtitle>10m2</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button className={styles.button}>See more</Button>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Room 2</CardTitle>
              <CardSubtitle>20m2</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button className={styles.button}>See more</Button>
            </CardBody>
          </Card>
          <Card className={styles.card}>
            <CardImg
              className={styles.img}
              top
              width="100%"
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Room 3</CardTitle>
              <CardSubtitle>30m2</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button className={styles.button}>See more</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

// needs better styling -> cards padding between -> font, colors and breaks (line)
