import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import MainMenuGrid from '../components/MainMenuGrid'
import { GetAllData } from '../hooks/UseData'

const Main = () => {

    const data = GetAllData();

    return (
        <>
            <Banner />
            <SearchBar data={data}/>
            <MainMenuGrid />
        </>
    );
}

export default Main