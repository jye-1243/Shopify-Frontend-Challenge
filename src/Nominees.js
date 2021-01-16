// JavaScript source code
import Nominee from './Nominee'

// Component for list of nominated movies
function Nominees(props) {

    // Create list of nominated movies from props
    let nominees = []

    for (let i = 0; i < props.nominees.length; i++) {
        let movie = props.nominees[i];

        nominees.push(
            <Nominee
                key={i}
                id={movie["id"]}
                title={movie["Title"]}
                year={movie["Year"]}
                onClick={props.onClick}
            />

        );
    }

    // Return nominees in encompassing div
    return (
        <div className="nominee-list">
            {nominees}
        </div>
    )
}

export default Nominees