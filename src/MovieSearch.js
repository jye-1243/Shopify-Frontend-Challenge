// JavaScript source code
import SearchResult from './SearchResult'

// Component for movie results
function MovieSearch(props) {

    // Based on props, create array of nominated movies
    let new_search = []


    for (let i = 0; i < props.data.length; i++) {
        let nominated = false;

        let movie = props.data[i];

        // For each movie, check if already nominated; disable btn if true
        for (let j = 0; j < props.nomList.length; j++) {
            if (movie["imdbID"] === props.nomList[j]["id"]) {
                nominated = true;
                break;
            }
        }

        new_search.push(
            <SearchResult
                key={i}
                movie={movie}
                disabled={nominated}
                onClick={props.onClick} />
        );

    }

    // Return list of movies 
    return (
        <div className="movies-list">
            {new_search}
        </div>
    );
}

export default MovieSearch