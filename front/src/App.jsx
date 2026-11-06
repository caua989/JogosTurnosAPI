import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
import Partida from './pages/Partida/index.jsx'

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path='/users' element={<Partida />} />
          </Routes>
      <Footer/>
    </>
  )
}

export default App