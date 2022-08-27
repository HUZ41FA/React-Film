import React, {useEffect, useState} from 'react'
import './App.css'
import MovieCard from './MovieCard'
import searchIcon from './search.svg'
const API_URL = `http://www.omdbapi.com/?apikey=${"YOUR API KEY"}`


const App = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("superman")

    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        
        setMovies(data.Search)
    }
    
    useEffect( () => {
        searchMovies(search)
    }, [search])
  
    return (
        <div className='app'>
          <h1>Movie Land</h1>
            <div className='search'>
              <input placeholder='Search for a movie' value = {search} onChange = {(e)=>{setSearch(e.target.value)}}></input>
              <img src={searchIcon}></img>
            </div>
                {
                movies  ?
                <div className='container'>
                    {
                        movies.map((movie=>{
                        return <MovieCard movie={movie} />
                    }))}
                </div>
                :
                <div className='empty'>
                    <h2>No views found with title: "{search}"</h2>
                </div>
                }
        </div>
  )
}

export default App