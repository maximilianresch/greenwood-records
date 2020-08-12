import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navigation() {
  return (
    //make it sticky, links, progress
    <div className="navbar">
      <AppBar position="static">
        <Toolbar
          variant="dense"
          className="flexboxgrid"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h5" color="inherit">
            greenwoodrecords
          </Typography>
          <Typography variant="h6" color="inherit" style={{}}>
            Studio
          </Typography>
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


