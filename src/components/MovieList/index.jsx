import React from 'react';
import Movie from '../Movie';
import './style.css'

const MovieList = ({ movies }) => {
    return (
        <div className="movieList">
            {movies.map(film => <Movie key={film.id} title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} cast={film.cast} />)}
        </div>
    )
}
export default MovieList