import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    //make it sticky, links, progress
    <div className={styles.sticky}>
      <AppBar position="static">
        <Toolbar variant="dense" className={styles.navbar}>
          <Link href="/">
            <Typography variant="h5" href="/">
              <a>greenwoodrecords</a>
            </Typography>
          </Link>
          <Link href="../Studio.js" as="../Studio.js">
            <Typography variant="h6">
              <a> Studio </a>
            </Typography>
          </Link>
          <Typography variant="h6">Equipment</Typography>
          <Typography variant="h6">Leistungen</Typography>
          <Typography variant="h6">Galerie</Typography>
          <Typography variant="h6">Contact</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
