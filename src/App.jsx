import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/index'
import { Banner, Movies, Watchlist } from './components/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  let [watchlist, setWatchList] = useState([])

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('movieLists', JSON.stringify(newWatchlist))
    setWatchList(newWatchlist)
    console.log(newWatchlist);
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id
    })

    setWatchList(filteredWatchlist)
    console.log(filteredWatchlist);
    localStorage.setItem('movieLists', JSON.stringify(filteredWatchlist));
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('movieLists')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])

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

                <Footer />
              </>
            }
          />

          <Route
            path='/watchlist'
            element={
              < Watchlist
                watchlist={watchlist}
                setWatchList={setWatchList}
              />
            }
          />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
