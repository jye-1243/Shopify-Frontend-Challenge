import React from 'react'

function Movie(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.year} </h2>
        </div>
        );
}

export default Movie