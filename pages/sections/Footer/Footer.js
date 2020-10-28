import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <span className={styles.span}>
          <p>© greenwoodrecords, record now</p>
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
          <div> max.mustermann@gmail.com</div>
          <div> +43 650 1234123 </div>
          <div className={styles.icons}>
            <Link href="https://www.facebook.com" prefetch={false}>
              <a target="_blank" className={styles.facebookIcon}>
                
                <FacebookIcon />
              </a>
            </Link>
            <Link
              href="https://www.instagram.com"
              prefetch={false}
            >
              <a target="_blank" className={styles.instagramIcon}>
                <InstagramIcon />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com"
              prefetch={false}
            >
              <a target="_blank" className={styles.youtubeIcon}>
                <YouTubeIcon />
              </a>
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
