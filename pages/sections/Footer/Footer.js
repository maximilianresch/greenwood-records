import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <span className={styles.span}>
          <p>-copyright- greenwoodrecords, record now</p>
          <a>Impressum</a>
          <a>AGB</a>
          <a>Datenschutzerklärung</a>
        </span>
      </div>
      <div>
        <span className={styles.span}>
          <div>Gföhlerstraße xx</div>
          <div> 3552 Lengenfeld</div>
          <div>Österreich</div>
        </span>
      </div>
      <div>
        <span className={styles.span}>
          <div> f.hainzl@gwr.at</div>
          <div> +43 699 17007298 </div>
          <div>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </span>
      </div>
    </div>
  );
}
