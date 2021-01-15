import React from 'react'
import { useState} from 'react'

const API_KEY = "677802be";

function SearchResult(props) {

    const id = props.movie["imdbID"];
    const title = props.movie["Title"];
    const year = props.movie["Year"];
    

    function handleClick() {
        props.onClick(id, title, year);
    }

    const [expand, setExpand] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                setError(response.Error);
            }
            else {
                setData(response);
            }

            setLoading(false);
        })
        .catch(({ message }) => {
            setError(message);
            setLoading(false);
        }) 

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
                         <p> Genre: {data["Genre"]} </p>
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