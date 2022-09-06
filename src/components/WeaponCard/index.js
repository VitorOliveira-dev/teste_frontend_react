import Loader from '../Loader'
import styles from './WeaponCard.module.css'

const WeaponCard = ({data}) => {
    if (data) {
        return (
            data.map(weapon => {
                return (
                    <div className={styles.weaponCard} key={weapon.uuid} data-test="weaponCard">
                        <div className={styles.weaponContent}>
                            <div className={styles.weaponInfo}>
                                <p className={styles.title}>{weapon.displayName}</p>
                                {weapon.shopData ? <p className={styles.subtitle}>{weapon.shopData.categoryText}</p> : <></>}
                            </div>
                            <div className={styles.weaponImage} data-test="weaponImage">
                                <img src={weapon.killStreamIcon} alt={weapon.displayName} />
                            </div>
                        </div>
                        <div className={styles.weaponButtonContainer}>
                            <a href={"/armas/"+weapon.uuid}>
                                <input type="button" value="DETALHES" className={styles.weaponButton} />
                            </a>
                        </div>
                    </div>
                )
            })
        )
    } else {
        return (
            <>
            <Loader />
            </>
        )
    }
}

export default WeaponCard