import { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import NavMobile from './components/NavMobile'
import { WebContext } from './helper/Context'

function App() {

  const [isOpened, setIsOpened] = useState(false)

  return (
      <Router>
      <WebContext.Provider value={{isOpened, setIsOpened}}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
      </Routes>
      </WebContext.Provider>
    </Router>
  )
}

export default App
