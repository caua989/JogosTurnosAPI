import { useEffect, useState } from 'react'
import { getPartidas } from '../../api/partida.jsx'
import './style.css'

function Partida() {
    const [partidas, setPartidas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true

        const loadPartidas = async () => {
            try {
                const response = await getPartidas()
                if (isMounted) {
                    setPartidas(response.partidas)
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(
                        requestError.response?.data?.message
                        || 'Não foi possível carregar a lista de usuários.'
                    )
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadPartidas()

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <main className="partida-page">
            <section className="partida-card" aria-labelledby="partida-title">
                <h1 id="partida-title">Partidas</h1>
                {loading && <p role="status">Carregando partidas...</p>}
                {!loading && error && <p className="partida-error" role="alert">{error}</p>}
                {!loading && !error && partidas.length > 0 && (
                    <div className="partida-table-wrapper">
                        <table className="partida-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partidas.map((partida) => (
                                    <tr key={partida.id}>
                                        <td>{partida.id}</td>
                                        <td>{partida.name}</td>
                                        <td>{partida.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {!loading && !error && partidas.length === 0 && (
                    <p>Nenhum usuário cadastrado.</p>
                )}
            </section>
        </main>
    )
}

export default Partida