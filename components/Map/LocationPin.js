import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './Map.module.css'

const LocationPin = ({ text }) => (
    <div className={styles.pin}>
      <LocationOnIcon icon={LocationOnIcon} className={styles.pinIcon} />
      <p className={styles.pinText}>{text}</p>
    </div>
  )

  export default LocationPin;