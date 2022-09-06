import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import MapCard from "../components/MapCard";
import Pagination from "../components/Pagination";
import DefaultButton from "../components/DefaultButton";
import { GetMapsData } from "../hooks/UseData";
import { useState } from "react";

const Maps = () => {

    const maps = GetMapsData();

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let currentItems = 0

    if (maps.data)
        currentItems = maps.data.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <PageTitle title="MAPAS" />
            <SearchBar data={[maps]} />
            <MapCard data={currentItems} />
            <Pagination itemsPerPage={itemsPerPage} totalItems={maps.data ? maps.data.length : 0} paginate={paginate} />
            <DefaultButton url="/" label="VOLTAR" />
        </>
    );
}

export default Maps