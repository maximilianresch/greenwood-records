import React from "react";
import styles from "./Equipment.module.css";
import img from "../../../public/steve-harvey-KrDsArJuy1A-unsplash.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    lineHeight: "1.8rem",
  },
}));

export default function Equipment() {
  const classes = useStyles();
  
  return (
    <div>
      <h2
        id="equipment"
        className={styles.separator}
        style={{ paddingTop: 50 }}
      >
        Equipment
      </h2>
      <br />
      <div className={styles.imgAlign}>
        <img src={img} alt="" className={styles.img} />
      </div>
      <br />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <h5>Mikrofone</h5>
            <ul>
              <li>2x AKG C414 B-ULS TLII</li>
              <li>2x AKG C214</li>
              <li>1x AKG D112</li>
              <li>2x AKG D707c</li>
              <li>1x AKG D12</li>
              <li>2x Sony C48</li>
              <li>1x Sennheiser MD441</li>
              <li>1x EV PL10</li>
              <li>1x Fostex MC10ST</li>
              <li>1x Rode NT1A</li>
              <li>1x Beyerdynamic e901</li>
              <li>2x t.bone RB500</li>
              <li>2x t.bone MB75</li>
              <li>1x Shure SM57</li>
              <li>1x Shure SM58</li>
              <li>1x Neumann TLM 102 Studio Set</li>
              <li>2x Neumann KM184</li>
              <li>1x Neumann KM84</li>
              <li>1x Neumann U87</li>
              <li>1x Neumann Swivel Mount</li>
              <li>2x Neumann CMV563 + Netzteil</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h5>Outboard + Monitor</h5>
            <ul>
              <li>1x SPL Goldmike</li>
              <li>2x AEA RPQ500</li>
              <li>1x Klark Teknik 76-KT</li>
              <li>1x Klark Teknik EQP-KT</li>
              <li>1x Quad 405-2</li>
              <li>2x Behringer Powerplay</li>
              <li>1x Studio Projects VTB1</li>
              <li>2x Yamaha NS10</li>
              <li>2x ATC scm45</li>
              <li>Crane Song Avocet</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h5>Instrumente</h5>
            <ul>
              <li>1x Fender Rhodes 73 Mk1</li>
              <li>1x Sonor New Beat Vintage</li>
              <li>1x Yamaha Stage Custom </li>
              <li>1x Yamaha DX7 </li>
              <li>1x Lakland </li>
              <li>1x Marcus Miller V7 </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h5>Wandler</h5>
            <ul>
              <li>Direct Out Prodigy mit 32 In/out Mic Pre -8ch AES/EBU</li>
            </ul>
          </Grid>
        </Grid>
        
  
          
        
      </div>

      {/* <div className={styles.equipmentList}>
        <div className={styles.microphones}>
          <h5>Mikrofone</h5>
          <ul>
            <li>2x AKG C414 B-ULS TLII</li>
            <li>2x AKG C214</li>
            <li>1x AKG D112</li>
            <li>2x AKG D707c</li>
            <li>1x AKG D12</li>
            <li>2x Sony C48</li>
            <li>1x Sennheiser MD441</li>
            <li>1x EV PL10</li>
            <li>1x Fostex MC10ST</li>
            <li>1x Rode NT1A</li>
            <li>1x Beyerdynamic e901</li>
            <li>2x t.bone RB500</li>
            <li>2x t.bone MB75</li>
            <li>1x Shure SM57</li>
            <li>1x Shure SM58</li>
            <li>1x Neumann TLM 102 Studio Set</li>
            <li>2x Neumann KM184</li>
            <li>1x Neumann KM84</li>
            <li>1x Neumann U87</li>
            <li>1x Neumann Swivel Mount</li>
            <li>2x Neumann CMV563 + Netzteil</li>
          </ul>
        </div>
        <div className={styles.outboard}>
          <h5>Outboard + Monitor</h5>
          <ul>
            <li>1x SPL Goldmike</li>
            <li>2x AEA RPQ500</li>
            <li>1x Klark Teknik 76-KT</li>
            <li>1x Klark Teknik EQP-KT</li>
            <li>1x Quad 405-2</li>
            <li>2x Behringer Powerplay</li>
            <li>1x Studio Projects VTB1</li>
            <li>2x Yamaha NS10</li>
            <li>2x ATC scm45</li>
            <li>Crane Song Avocet</li>
          </ul>
        </div>
        <div className={styles.instruments}>
          <h5>Instrumente</h5>
          <ul>
            <li>1x Fender Rhodes 73 Mk1</li>
            <li>1x Sonor New Beat Vintage</li>
            <li>1x Yamaha Stage Custom </li>
            <li>1x Yamaha DX7 </li>
            <li>1x Lakland </li>
            <li>1x Marcus Miller V7 </li>
          </ul>
        </div>
        <div  className={styles.wandler}>
          <h5>Wandler</h5>
          <ul>
            <li>Direct Out Prodigy mit 32 In/out Mic Pre -8ch AES/EBU</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
