import styles from './Map.module.css'
import { useParams } from 'react-router-dom'
import { GetMapDataByUuid } from '../../hooks/UseData'
import DefaultButton from '../../components/DefaultButton'
import Loader from '../../components/Loader'


const Map = () => {

    const { uuid } = useParams()

    const map = GetMapDataByUuid(uuid)

    if (Object.keys(map).length > 0) {
        return (
            <>
                <div className={styles.mapTitle}>
                    <h1 data-test="mapTitle">{map.displayName.toUpperCase()}</h1>
                </div>
                <div className={styles.mapImage}>
                    <img src={map.splash} alt={map.displayName} />
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.mapCoordinates}>
                        <p className={styles.subtitle}>{map.coordinates}</p>
                    </div>{
                        map.displayIcon ?
                            <div className={styles.mapDesignContainer}>
                                <p className={styles.title}>O MAPA NO JOGO</p>
                                <div className={styles.mapDesignImage}>
                                    <img src={map.displayIcon} alt={`${map.displayName} Design`} />
                                </div>
                            </div> : <></>
                    }</div>
                <DefaultButton label="VOLTAR" url="/mapas/" />
            </>
        )
    } else {
        return (
            <>
                <Loader />
            </>
        )
    }
}

export default Map