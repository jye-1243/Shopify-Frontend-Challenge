import React, { useEffect } from 'react'
import Movie from './Movie'

function Results(props) {

    let movies = [];

    // Fix here
    for (let i = 0; i < props.data.length; i++) {
        let value = props.data[i]
        movies.push(<Movie title={value["Title"]} year={value["Year"]} />);
    }

    return (
        <div id="results">
            {movies}
        </div>
        );
}

export default Results