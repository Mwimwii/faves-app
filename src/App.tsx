import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import {BottomBar, NavBar} from './components'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col relative w-full h-full min-h-screen items-center'>
        <NavBar />
        <Routes />
        <BottomBar />
      </div>
    </BrowserRouter>
  )
}

export default App
