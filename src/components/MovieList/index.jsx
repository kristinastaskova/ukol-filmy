import React from 'react';
import Movie from '../Movie';

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map(film => <Movie key={film.id} title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} cast={film.cast} />)}
        </>
    )
}
export default MovieList