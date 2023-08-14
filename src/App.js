import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //#1
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans.jsx'
import './App.css'
import './pages/Server'

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link className='site-logo' to = '/'>#VANILIFE</Link>
      <nav>
        <Link to = '/about'>A bout</Link>
        <Link to = '/vans'>Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/'element = {<Home/>}/>
      <Route path='/about'element = {<About/>}/>
      <Route path='/vans' element = {<Vans/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;