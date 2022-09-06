import styles from './MapCard.module.css'
import Loader from '../Loader'

const MapCard = ({ data }) => {
    if (data) {
        return (data.map(map => {
            return (
                <div className={styles.mapCard} key={map.uuid} data-test="mapCard">
                    <div className={styles.mapCardImage} data-test="mapImage">
                        <img src={map.listViewIcon} alt={map.displayName} />
                    </div>
                    <div className={styles.mapCardContainer}>
                        <div className={styles.mapCardInfo}>
                            <p className={styles.mapTitle}>{map.displayName}</p>
                            <p className={styles.mapSubtitle}>{map.coordinates}</p>
                        </div>
                        <div className={styles.mapCardButtonContainer}>
                            <a href={"/mapas/" + map.uuid}>
                                <input type="button" value="DETALHES" className={styles.mapCardButton} />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }))
    } else {
        return (
            <>
            <Loader />
            </>
        )
    }
}

export default MapCard