import styles from './Dropdown.module.css';

const Dropdown = ({ categoryName, items}) => {
    return (
        <>
            {
                items.length > 0 && categoryName !== null ? <div className={styles.dropdownCategory}>{categoryName.toUpperCase()}</div> : <></>
            }
            {
                items
                    .slice(0, 3)
                    .map(x => (
                        <li className={styles.dropdownRow} key={x.uuid} data-test="dropdownRow">
                            <a href={`/${categoryName.toLowerCase()}/${x.uuid}`}>
                                <div className={styles.dropdownRowImg}>
                                    <img src={x.displayIcon} alt={x.displayName} />
                                </div>
                                <div className={styles.dropdownRowText}>
                                    {x.displayName}
                                </div>
                            </a>
                        </li>
                    ))
            }
        </>);
}

export default Dropdown