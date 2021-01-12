// JavaScript source code
import React from 'react'

function Nominee(props) {

    function handleClick() {
        props.onClick(props.id);
    }

    return (
        <div className="nominee">
            <div className="movie-info">
                <h2> {props.title} </h2>
                <h3> {props.year} </h3>
            </div>
            <button className="remove-btn"
                disabled={props.disabled}
                onClick={handleClick}>
                Remove
            </button>
        </div>
    );
}

export default Nominee