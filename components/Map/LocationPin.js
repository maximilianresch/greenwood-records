import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import styles from './Map.module.css'

const LocationPin = ({ text }) => (
    <div>
      <MusicNoteOutlinedIcon icon={MusicNoteOutlinedIcon} className={styles.pinIcon} />
      <p className={styles.pinText}>{text}</p>
    </div>
  )

  export default LocationPin;