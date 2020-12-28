import React from 'react'

function Movie(props) {
    return (
        <div className="movie-item">
            <h2> {props.title} </h2>
            <h3> {props.year} </h3>
            <button className="movie-btn"
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.label} 
            </button>
        </div>
        );
}

export default Movie