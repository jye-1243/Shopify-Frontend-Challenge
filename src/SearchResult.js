import React from 'react'
import { useState, useEffect } from 'react'

const API_KEY = "677802be";

// Component for single movie that is found via search
function SearchResult(props) {

    // Constants based on props
    const id = props.movie["imdbID"];
    const title = props.movie["Title"];
    const year = props.movie["Year"];
    
    // Handle click function using id, title, year of each movie
    function handleClick() {
        props.onClick(id, title, year);
    }

    // States for fetching data from API
    const [expand, setExpand] = useState(false);
    const [data, setData] = useState([]);

    // Fetch data from API when a movie is expanded to view more information
    useEffect(() => {
        if (expand) {
            fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
                .then(resp => resp.json())
                .then(response => {
                    if (response.Response === 'False') {
                        console.log(response.Error);
                    }
                    else {
                        setData(response);
                    }
                })
                .catch(({ message }) => {
                    console.log(message);
                })
        }

    }, [expand]);

    // Render expanded version of movie showing added info if needed
    if (expand) {
         return (
            <div className="search-item">
                <div className="min-search">
                    <div className="movie-info">
                        <h2> {title} </h2>
                        <h3> {year} </h3>
                    </div>
                    <button className="nominate-btn"
                        disabled={props.disabled}
                        onClick={handleClick} >
                        Nominate
                    </button>
                </div>

                 <div className="added-info">
                     <div className="movie-more-info">
                         <p> Genres: {data["Genre"]} </p>
                         <p> Director: {data["Director"]} </p>
                         <p> Actors: {data["Actors"]} </p>
                         <p> Plot: {data["Plot"]} </p>
                     </div>
                     <div className="poster-div">
                         <img className= "poster" src={data["Poster"]} alt="Movie Poster not Found" />
                     </div>
                </div>

                <button className="expand-btn"
                    onClick={() => setExpand(false)}>
                    See Less
                </button>
            </div>
        );
    }

    // Default render showing minimal information
    return (
        <div className="search-item">
            <div className="min-search">
                <div className="movie-info">
                    <h2> {title} </h2>
                    <h3> {year} </h3>
                </div>
                <button className="nominate-btn"
                    disabled={props.disabled}
                    onClick={handleClick} >
                        Nominate
                </button>
            </div>
            <button className="expand-btn"
                onClick={() => {
                    setExpand(true);
                }}>
                See More
            </button>
        </div>
        );
}

export default SearchResult