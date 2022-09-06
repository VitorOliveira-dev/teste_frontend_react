import styles from './MainMenuGrid.module.css';

const MainMenuGrid = () => {

    return (
        <div className={styles.containerGrid}>

            <div className={styles.card} id={styles.agentsCard} data-test="agentsCard">
                <a href="/agentes">
                    <p className={styles.cardTitle}>
                        AGENTES
                    </p>
                </a>
            </div>
            <div className={styles.card} id={styles.weaponsCard} data-test="weaponsCard">
                <a href="/armas">
                    <p className={styles.cardTitle}>
                        EQUIPAMENTO
                    </p>
                </a>
            </div>
            <div className={styles.card} id={styles.mapsCard} data-test="mapsCard">
                <a href="/mapas">
                    <p className={styles.cardTitle}>
                        MAPAS
                    </p>
                </a>
            </div>
        </div>
    )
}

export default MainMenuGrid