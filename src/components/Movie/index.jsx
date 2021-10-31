import React from 'react';
import Actor from '../Actor'
import './style.css';


const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
    return (
        <div className="movie">
            <img className="poster" src={"assets/" + poster} alt="poster" />
            <div className="info">
                <h2>{title}</h2>
                <div className="general">
                    <p><span>Rok vydání: </span>{year}</p>
                    <p><span>Hodnocení: </span>{rating} z 10</p>
                    <p><span>Režie: </span>{director}</p>
                    <p><span>Žánr: </span>{genre}</p>
                </div>
                <div className="cast">
                    <h5>V hlavních rolích: </h5>
                    {cast.map(actor => <Actor key={actor.name} name={actor.name} as={actor.as} />)}
                </div>
            </div>
        </div>
    )
}

export default Movie;