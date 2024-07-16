import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/index'
import { Banner, Movies, Watchlist } from './components/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  let [watchlist, setWatchList] = useState([])

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    setWatchList(newWatchlist)
    console.log(newWatchlist);
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })

    setWatchList(filteredWatchlist)
    console.log(filteredWatchlist);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={ 
              <> 
                <Banner /> 

                <Movies 
                  handleAddToWatchlist={handleAddToWatchlist} 
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            } 
          />
          <Route path='/watchlist' element={ < Watchlist /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
