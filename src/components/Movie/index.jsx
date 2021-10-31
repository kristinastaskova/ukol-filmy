import React from 'react';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <img className="poster" src={"assets/" + poster} alt="poster" />
            <p>{year}</p>
            <p>{rating}</p>
            <p>{director}</p>
            <p>{genre}</p>
        </div>
    )
}

export default Movie;