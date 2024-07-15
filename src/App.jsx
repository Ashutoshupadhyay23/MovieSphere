import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/index'
import { Banner, Movies, Watchlist } from './components/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <> <Banner /> <Movies /> </> } />
          <Route path='/watchlist' element={ < Watchlist /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
