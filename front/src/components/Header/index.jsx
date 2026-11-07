import { useNavigate } from 'react-router-dom'
import './style.css'

function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return (
        <>
            Header
            <button
                 onClick={handleLogout}
            >iniciar jogo</button>

            <button
                 onClick={handleLogout}
            >Atacar</button>

            <button
                 onClick={handleLogout}
            >Curar</button>

            <button
                 onClick={handleLogout}
            >Defender</button>
        </>
    )
}

export default Header