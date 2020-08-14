import React from "react";
import styles from "./Equipment.module.css";
import img from '../../../public/undraw_compose_music_ovo2.png';

export default function Equipment() {
  return (
    //create grid or flex system
    <div>
      <h2 className={styles.separator} style={{ paddingTop: 50 }}>
        Equipment
      </h2>
      <br />

      <img src={img} alt='' className={styles.img} />

      <br />
      <p>
        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
        Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard
        Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll
        Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen.
        Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die
        elektronische Schriftbearbeitung geschafft (bemerke, nahezu
        unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset",
        welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie
        "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.
      </p>
      <br />
      <div className={styles.equipmentList}>
        <div>
          <h5>Microphone</h5>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
        <div>
          <h5>Plug-Ins</h5>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
        <div>
          <h5>Lautsprecher</h5>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
