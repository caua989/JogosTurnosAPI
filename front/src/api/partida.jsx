import api from './api'

// buscar, buscarUm, criar, alterar e deletar


 export const LoginUser = async ( email, password) => {

    const body = { email, password }
    const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-type': 'application/json' }
    })

    return response.data
}