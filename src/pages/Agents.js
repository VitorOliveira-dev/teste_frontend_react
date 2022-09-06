import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import AgentCard from "../components/AgentCard";
import Pagination from "../components/Pagination";
import DefaultButton from "../components/DefaultButton";
import { GetAgentsData } from "../hooks/UseData";
import { useState } from "react";

const Agents = () => {

    const agents = GetAgentsData();

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let currentItems = 0

    if (agents.data)
        currentItems = agents.data.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <PageTitle title="AGENTES" />
            <SearchBar data={[agents]} />
            <AgentCard data={currentItems}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={agents.data ? agents.data.length : 0} paginate={paginate} />
            <DefaultButton url="/" label="VOLTAR" />
        </>
    );
}

export default Agents