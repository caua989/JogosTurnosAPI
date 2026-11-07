import api from './api'

export const getPartidas = async () => {
    const response = await api.get('/v1/partida/buscar')

    return response.data
}

export const getCurrentPartidas = async () => {
    const response = await api.get('/v1/partida/detalhe')

    return response.data
}

export const createPartidas = async (descricao, data, vencedor) => {
    const response = await api.post('/v1/partida/criar', { descricao, data, vencedor })

    return response.data
}

export const updateCurrentPartidas = async (descricao, data, vencedor) => {
    const response = await api.put('/v1/partida/alterar', { descricao, data, vencedor })

    return response.data
}

export const deleteCurrentUPartidas = async () => {
    const response = await api.delete('/v1/partida/deletar')

    return response.data
}
