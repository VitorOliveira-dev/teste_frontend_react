import styles from './DefaultButton.module.css'

const DefaultButton = ({ url, label }) => {
    return (
        <div className={styles.defaultButtonContainer} data-test="defaultButtonContainer">
            <a href={url}>
                <input type="button" value={label} className={styles.defaultButton} />
            </a>
        </div>
    );
}

export default DefaultButton
