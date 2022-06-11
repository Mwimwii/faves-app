import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Routes } from './Routes'

const Header: React.FC = () => {
  return(
    <>
    <p className='text-left pl-3 pt-3 text-2xl font-bold'>Faves</p>
      <div className="">
        <Link to="/">
        <button className='text-sm px-3 py-2 font-semibold text-slate-700'>+ Home</button>
        </Link>
        <Link to="/likes">
        <button className='text-sm px-3 py-2 font-semibold text-slate-700'>+ Liked Movies</button>
        </Link>
      </div>
    </>
  )
}
const App: React.FC = () => {

  const [movies, setMovies] = useState({})

  return (
    <BrowserRouter>
      <Header />
          <div className="App w-screen h-screen">
            <Routes />
          </div>
    </BrowserRouter>
  )
}

export default App
