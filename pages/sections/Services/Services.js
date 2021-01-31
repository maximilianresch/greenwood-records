import React from "react";
import styles from "./Services.module.css";
import Tilt from "react-tilt";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import img from "../../../public/RegieMischpult.jpg";
import Divider from '@material-ui/core/Divider';

export default function Services() {
  return (
    <div id="services">
      <h2 className={styles.separator}>Leistungen</h2>

      <br />

      <img src={img} alt="" className={styles.img} />

      <Row className={styles.card}>
        <Col sm="6">
          <Tilt options={{ max: 0 }}>
            <Card body className={styles.cardStyle}>
              <CardTitle>
                <h6>Aufnahme mit Techniker</h6>
              </CardTitle>
              <CardText>
                <div>550€ pro Tag</div>
                <div>500€ ab 3 Tagen</div>
                <div>Schneiden/Post Production/Mischen 60€ pro Stunde</div>
                <Divider />
                <div>exkl. 20% MwSt.</div>
              </CardText>
            </Card>
          </Tilt>
        </Col>
        <br />
        <Col sm="6">
          <Tilt options={{ max: 0 }}>
            <Card
              style={{ paddingBottom: "42px" }}
              body
              className={styles.cardStyle}
            >
              <CardTitle>
                <h6>Aufnahme ohne Techniker</h6>
              </CardTitle>
              <CardText>
                <div>300€ pro Tag</div>
                <div>250€ ab 3 Tagen</div>
                <Divider />
                <div>exkl. 20% MwSt.</div>
              </CardText>
            </Card>
          </Tilt>
        </Col>

        <Col sm="6">
          <Tilt options={{ max: 0 }}>
            <Card body className={styles.cardStyle}>
              <CardTitle>
                <h6>Klavierstimmer</h6>
              </CardTitle>
              <CardText>
                <div>140€ pro Stimmung</div>
                <div>Der Flügel ist auf 440 Hz gestimmt.</div>
                <Divider/>
                <div>exkl. 20% MwSt.</div>
              </CardText>
            </Card>
          </Tilt>
        </Col>
      </Row>
      <p style={{textAlign: "center", fontSize: "25px"}}>Auf Anfrage erstelle ich Ihnen auch gerne ein Angebot für Ihre Aufnahme.</p>

      <br />

      {/* <div className={styles.card}>
      
        <Card style={{backgroundColor:'green'}} className={styles.cardstyle}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Default
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              ohne Techniker
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className={styles.cardStyle}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Default
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              ohne Techniker
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={styles.cardStyle}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Default
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              ohne Techniker
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div> */}
    </div>
  );
}
