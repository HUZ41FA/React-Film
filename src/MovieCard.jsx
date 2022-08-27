import React from 'react'

const MovieCard = (props) => {

  const movie = props.movie

  return (
    <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster ?  movie.Poster : "https://placeholder.com/400"} alt={movie.Title}></img>
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard