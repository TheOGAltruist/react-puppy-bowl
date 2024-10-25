import './app.css'
import SinglePlayer from './components/SinglePlayer'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

export function App() {

  return (
    <>
      <NavBar />
      <hr />
      <hr />
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}
