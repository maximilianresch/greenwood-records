import React from 'react';
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div>
            <h2 className={styles.separator}>Kontakt</h2>
            
            <p className={styles.info}>
            <div>Kontaktieren Sie uns!</div>
            <div>Tonstudio</div>
            <div>Fabian Hainzl</div>
            <div>Gföhlerstraße xx</div>
            <div>A-3552 Lengenfeld</div>
            <div>Tel: +43 699 17007298</div>
            <div>e-mail: f.hainzl@grw.at</div>
            </p>
            
        </div>
    )
}