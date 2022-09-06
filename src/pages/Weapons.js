import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import WeaponCard from "../components/WeaponCard";
import Pagination from "../components/Pagination";

import { GetWeaponsData } from "../hooks/UseData";
import { useState } from "react";
import DefaultButton from "../components/DefaultButton";

const Weapons = () => {

    const weapons = GetWeaponsData();

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let currentItems = 0

    if (weapons.data)
        currentItems = weapons.data.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <PageTitle title="ARMAS" />
            <SearchBar data={[weapons]} />
            <WeaponCard data={currentItems} />
            <Pagination itemsPerPage={itemsPerPage} totalItems={weapons.data ? weapons.data.length : 0} paginate={paginate} />
            <DefaultButton url="/" label="VOLTAR" />
        </>
    );
}

export default Weapons