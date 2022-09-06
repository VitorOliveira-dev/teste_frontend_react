import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://valorant-api.com/v1/'
})

export const getAgents = async () => {
    try {
        const response = await api.get("/agents?isPlayableCharacter=true&language=pt-BR")
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getWeapons = async () => {
    try {
        const response = await api.get("/weapons?language=pt-BR")
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getMaps = async () => {
    try {
        const response = await api.get("/maps?language=pt-BR")
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getWeaponByUuid = async (uuid) => {
    try {
        const response = await api.get(`/weapons/${uuid}?language=pt-BR`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export const getMapByUuid = async (uuid) => {
    try {
        const response = await api.get(`/maps/${uuid}?language=pt-BR`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}


export const getAgentByUuid = async (uuid) => {
    try {
        const response = await api.get(`/agents/${uuid}?language=pt-BR`)
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}