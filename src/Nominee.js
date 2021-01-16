// JavaScript source code
import React from 'react'

// Component for nominated movie
function Nominee(props) {

    // Button removes nomination
    function handleClick() {
        props.onClick(props.id);
    }

    // Return div with title, year, button to remove
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