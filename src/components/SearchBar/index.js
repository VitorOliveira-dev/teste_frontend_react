import styles from './SearchBar.module.css';
import Dropdown from '../Dropdown';
import { useState } from 'react';

const SearchBar = ({ data }) => {

    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const categories = data.map(x => x.categoryName)

    let items = []

    if (value !== "") 
        items = data.map(category => category.data.filter(item => item.displayName.toLowerCase().includes(value.toLowerCase())))
    
    return (
        <div className={styles.searchBarContainer}>
            <input type="text" name="searchBar" className={styles.searchBar} value={value} onChange={onChange} placeholder="Digite o que está procurando" required data-test="searchBar"/>
            <ul className={styles.dropdown} data-test="dropdown">
                {
                    items.map((category, index) => {
                        return <Dropdown categoryName={categories[index]} items={category} key={categories[index]}/>
                    })
                }
            </ul>
        </div>
    );
}

export default SearchBar;