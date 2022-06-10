import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json()) 


function App() {
  const { data } = useSWR('', fetcher)
  const [movies, setMovies] = useState({})

  return (
    <div className="App">
      <p>Faves</p>
      <div className="flex justify-center items-center">
        <button className='rounded-full w-32 bg-slate-500 text-sm px-3 py-2 text-slate-100'>Home</button>
        <button className='rounded-full w-32 bg-slate-500 text-sm px-3 py-2 text-slate-100'>Liked Movies</button>

        
        
      </div>
    </div>
  )
}

export default App
