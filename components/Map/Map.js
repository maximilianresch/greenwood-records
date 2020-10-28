import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.css";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => (
  <div className={styles.map}>
    <h2 className={styles.maph2}>Unser Standort</h2>

    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhrGLqJU1LcnSqYFRCjTsWPqgax0NXL3I" }}
        defaultCenter={location}
        defaultZoom={12}
      >
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
