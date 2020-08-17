import React from "react";
import styles from "./Services.module.css";
import Tilt from "react-tilt";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default function Services() {
  return (
    <div>
      <div className={styles.separator}>
        <h2>Leistungen</h2>
      </div>
        <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At varius vel
        pharetra vel turpis nunc eget lorem. Pharetra diam sit amet nisl. Sit
        amet volutpat consequat mauris nunc congue nisi. At quis risus sed
        vulputate odio. Sit amet dictum sit amet justo donec enim. Nam aliquam
        sem et tortor.
      </p>

      <Row className={styles.card}>
        <Col sm="6">
          <Tilt options={{ max: 20 }}>
            <Card body className={styles.cardStyle}>
              <CardTitle>Inklusive Techniker</CardTitle>
              <CardText>
                Komplettes Studio ab €2.000.- / Tag
                <p>
                  metus dictum at tempor commodo ullamcorper a lacus vestibulum
                  sed arcu non odio euismod lacinia
                </p>
              </CardText>
              <Button>Get started</Button>
            </Card>
          </Tilt>
        </Col>

        <Col sm="6">
          <Tilt options={{ max: 20 }}>
            <Card body className={styles.cardStyle}>
              <CardTitle>Ohne Techniker</CardTitle>
              <CardText>
                Komplettes Studio ab €1.000.- / Tag
                <p>
                  metus dictum at tempor commodo ullamcorper a lacus vestibulum
                  sed arcu non odio euismod lacinia
                </p>
              </CardText>
              <Button>Jetzt Aufnehmen</Button>
            </Card>
          </Tilt>
        </Col>
      </Row>

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
