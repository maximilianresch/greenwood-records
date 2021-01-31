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
          <div>Gföhlerstraße 34</div>
          <div> 3552 Lengenfeld</div>
          <div>Österreich</div>
        </span>
      </div>
      <div>
        <span className={styles.span}>
          <div> office@greenwoodrecords.at</div>
          <div> +43 660 3002487 </div>
          <div className={styles.icons}>
            <Link  prefetch={false} href="https://www.facebook.com/Greenwoodrecords-104374568346681" target="_blank" >
              <a  className={styles.facebookIcon}>
                
                <FacebookIcon />
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/greenwood_records/"
              prefetch={false}
            >
              <a target="_blank" className={styles.instagramIcon}>
                <InstagramIcon />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCM3BVjkQJ52tvrp2U3FaXeQ/featured"
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
