import { useEffect, useState } from "react";
import { getAgentByUuid, getAgents, getMapByUuid, getMaps, getWeaponByUuid, getWeapons } from "../services/api"

export const GetAllData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const apiData = []

        const getData = async () => {
            apiData.push({ categoryName: "Agentes", data: await getAgents() });
            apiData.push({ categoryName: "Armas", data: await getWeapons() });
            apiData.push({ categoryName: "Mapas", data: await getMaps() });
        }

        getData()

        setData(apiData)

    }, [])

    return data
}

export const GetAgentsData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            setData({ categoryName: "Agentes", data: await getAgents() });
        }

        getData()
    }, [])

    return data
}

export const GetWeaponsData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            setData({ categoryName: "Armas", data: await getWeapons() });
        }

        getData()
    }, [])

    return data
}

export const GetMapsData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            setData({ categoryName: "Mapas", data: await getMaps() });
        }

        getData()
    }, [])

    return data
}

export const GetWeaponDataByUuid = (uuid) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async (uuid) => {
            setData(await getWeaponByUuid(uuid))
        }

        getData(uuid)

    }, [uuid])

    return data
}

export const GetMapDataByUuid = (uuid) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async (uuid) => {
            setData(await getMapByUuid(uuid))
        }

        getData(uuid)

    }, [uuid])

    return data
}

export const GetAgentDataByUuid = (uuid) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async (uuid) => {
            setData(await getAgentByUuid(uuid))
        }

        getData(uuid)

    }, [uuid])

    return data
}