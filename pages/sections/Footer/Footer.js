import React from "react";
import styles from "./Footer.module.css";

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
            <div> +43 1234 567890</div>
            <div> -social media icons-</div>
          </span>
        </div>
      </div>
    
  );
}
