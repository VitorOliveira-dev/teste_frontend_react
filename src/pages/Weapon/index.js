import styles from './Weapon.module.css'
import { useParams } from 'react-router-dom'
import { GetWeaponDataByUuid } from '../../hooks/UseData'
import DefaultButton from '../../components/DefaultButton'
import Loader from '../../components/Loader'

const Weapon = () => {

    const { uuid } = useParams()

    const weapon = GetWeaponDataByUuid(uuid)

    if (Object.keys(weapon).length > 0) {
        return (
            <>
                <div className={styles.weaponTitle}>
                    <h1 data-test="weaponTitle">{weapon.displayName.toUpperCase()}</h1>
                </div>
                <div className={styles.weaponImage}>
                    <img src={weapon.displayIcon} alt={weapon.displayName} />
                </div>
                {
                    weapon.weaponStats ?
                        <>
                            <div className={styles.weaponStatsTitleContainer}>
                                <p className="title" id={styles.mainTitle}>ESTATÍSTICAS</p>
                            </div>
                            <div className={styles.weaponStatsContainer}>
                                <div className={styles.weaponDamageContainer} data-test="damageRanges">
                                    {weapon.weaponStats.damageRanges.map(range => (
                                        <div className={styles.weaponDamageCard}>
                                            <p className={styles.title}>DANO</p>
                                            <p className={styles.subtitle}>{`ENTRE ${range.rangeStartMeters} - ${range.rangeEndMeters} M`}</p>
                                            <p className={styles.label}>Cabeça: {range.headDamage}</p>
                                            <p className={styles.label}>Corpo: {range.bodyDamage}</p>
                                            <p className={styles.label}>Pernas: {range.legDamage}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.weaponInfoContainer}>
                                    <div className={styles.weaponGameplayCard}>
                                        <p className={styles.label}>Tamanho do Pente: {weapon.magazineSize}</p>
                                        <p className={styles.label}>Velocidade: {weapon.fireRate}</p>
                                    </div>
                                    <div className={styles.weaponShopContainer}>
                                        <p className={styles.title}>MERCADO</p>
                                        <div className={styles.weaponShopCard}>
                                            <p className={styles.title}>CATEGORIA</p>
                                            <p className={styles.subtitle}>{weapon.shopData.categoryText}</p>
                                            <p className={styles.title}>VALOR</p>
                                            <p className={styles.subtitle}>{weapon.shopData.cost} Coins</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> : <></>
                }<DefaultButton label="VOLTAR" url="/armas/" />
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

export default Weapon