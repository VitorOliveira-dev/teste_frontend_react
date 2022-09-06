import styles from './Banner.module.css';

const Banner = () => {

    const img_url = "/img/valorant_banner.jpg"

    return (
        <div className={styles.banner} data-test="banner">
            <img src={img_url} alt="banner" />
        </div>
    )
}

export default Banner