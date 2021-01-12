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
    const [data, setData] = useState({});

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
                    <p> Director:  </p>
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