import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.css";
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';

const Map = ({ location, zoomLevel }) => (
  <div className={styles.map}>
    <h2 className={styles.maph2}>Hier wohnt ein Beidl</h2>

    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBphB4EebkCIbjynpK6IziaoLLbeRp-bAE" }}
        defaultCenter={location}
        defaultZoom={12}
      >
        <MusicNoteOutlinedIcon
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
