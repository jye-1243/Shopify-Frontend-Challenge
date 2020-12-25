import React from 'react'

function Movie(props) {
    return (
        <div>
            <h2> {props.title} </h2>
            <h3> {props.year} </h3>
        </div>
        );
}

export default Movie