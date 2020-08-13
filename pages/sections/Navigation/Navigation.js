import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    //make it sticky, links, progress
    <div className={styles.navbar}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          className="flexboxgrid"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="/"><Typography variant="h5" color="inherit" href="/">
            <a>greenwoodrecords</a>
          </Typography>
          </Link>
          <Link href="../Studio.js" as="../Studio.js">
          <Typography variant="h6" color="inherit" >
            <a> Studio </a>
          </Typography>
          </Link>
          <Typography variant="h6" color="inherit">
            Equipment
          </Typography>
          <Typography variant="h6" color="inherit">
            Leistungen
          </Typography>
          <Typography variant="h6" color="inherit">
            Galerie
          </Typography>
          <Typography variant="h6" color="inherit">
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


