// JavaScript source code
import Nominee from './Nominee'

function Nominees(props) {
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

    return (
        <div className="nominee-list">
            {nominees}
        </div>
    )
}

export default Nominees