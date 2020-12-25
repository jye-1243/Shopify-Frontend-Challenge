import './App.css';
import React, { useState, useEffect } from 'react'
import Movie from './Movie'

const BarStyling = {  };
const API_KEY = "677802be";

function App() {

    const [value, setValue] = useState('');
    const [q, setQ] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [nominees, setNominees] = useState([]);

    useEffect( () => {

        setLoading(true);
        setError(null);
        setData([]);

        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    setError(response.Error);
                }
                else {
                    setData(response.Search);
                }

                setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                setLoading(false);
            })

    }, [q]);

    useEffect(() => {
        // Fix here
        let new_search = []
        for (let i = 0; i < data.length; i++) {
            let movie = data[i]
            new_search.push(
                <div>
                    <Movie title={movie["Title"]} year={movie["Year"]} />
                    <button
                        onClick={
                            () => {
                                let newNoms = [];

                                for (let j = 0; j < nominees.length; j++) {
                                    newNoms.push(nominees[j]);
                                }

                                newNoms.push(
                                    <div>
                                        <Movie title={movie["Title"]} year={movie["Year"]} />
                                        <button> Remove </button>
                                    </div>);

                                setNominees(newNoms);
                            }
                        }
                    > Nominate </button>
                </div>
            );
        }
        setMovies(new_search);
    }, [data, nominees])

    return (
        <div className="App">
            <header className="App-header">
                <h1> SHOPPIES NOMINATIONS </h1>
            </header>

            <div className="App-body">
                <div className = "search-panel">
                    <h2> Find your Movie: </h2>
                    < input
                        className="search-bar"
                        type="text"
                        key="search-bar"
                        value={value}
                        placeholder={"Movie Title"}
                        onChange={(event) => setValue(event.target.value)}
                        onKeyUp={(event) => {
                            if (event.code === "Enter"){
                                setQ(value);
                            }
                        }}
                    />

                    <button onClick={() => setQ(value)}> 
                        Search
                    </button>
                </div>

                <div className="nominee-panel">
                    <div className="movie-panel">
                        <h2> SEARCH RESULTS </h2>
                        <div className = "movies">
                            {movies}
                        </div>
                        </div>
                    <div className="nominated-panel">
                        <h2> NOMINEES </h2>

                        {nominees}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
