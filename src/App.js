import './App.css';
import React, { useState, useEffect, useRef } from 'react'
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
    const [nomList, setNomList] = useState([]);
    const [nomCount, setNomCount] = useState(0);
    const [banner, setBanner] = useState(null);

    const countRef = useRef();
    countRef.current = nomCount;

    const nomListRef = useRef();
    nomListRef.current = nomList;
    const nomRef = useRef();
    nomRef.current = nominees;

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
        if (nomCount === 5) {
            setBanner(
                <div className="banner">
                    <h2> Congratulations!  You've nominated 5 movies for the Shoppies! </h2>
                </div>
            );
        }

        else {
            setBanner(null);
        }
    }, [nomCount]);

    useEffect(() => {
        // Fix here
        let new_search = []


        for (let i = 0; i < data.length; i++) {
            let nominated = false;
            
            let movie = data[i]

            // Fix here ?
            for (let j = 0; j < nominees.length; j++) {
                if (movie["imdbID"] === nomList[j]["id"]) {
                    nominated = true;
                    break;
                }
            }

            new_search.push(
                <Movie
                    title={movie["Title"]}
                    year={movie["Year"]}
                    disabled={nominated}
                    label="Nominate"
                    onClick={
                        () => {
                            if (countRef.current < 5) {


                                let newNoms = [];
                                let newNomList = [];

                                // Fix here
                                for (let j = 0; j < nomRef.current.length; j++) {
                                    newNoms.push(nomRef.current[j]);
                                    newNomList.push(nomListRef.current[j]);
                                }

                                newNoms.push(
                                    <div>
                                        <Movie
                                            title={movie["Title"]}
                                            year={movie["Year"]}
                                            label="Remove"
                                            onClick={
                                                () => {
                                                    let index = 0;
                                                    for (let j = 0; j < nomListRef.current.length; j++) {

                                                        if (movie["imdbID"] === nomListRef.current[j]["id"]) {
                                                            index = j;
                                                        }
                                                    }

                                                    let updatedNomList = [];
                                                    let updatedNominees = [];

                                                    for (let j = 0; j < nomRef.current.length; j++) {
                                                        if (j != index) {
                                                            updatedNominees.push(nomRef.current[j]);
                                                            updatedNomList.push(nomListRef.current[j]);
                                                        }
                                                    }

                                                    setNominees(updatedNominees);
                                                    setNomList(updatedNomList);
                                                    setNomCount(countRef.current - 1);
                                                }
                                            }
                                        />

                                    </div>
                                );

                                newNomList.push(
                                    {
                                        id: movie["imdbID"],
                                        Title: movie["Title"],
                                        Year: movie["Year"]
                                    }
                                )

                                console.log(countRef.current + 1);
                                setNomCount(countRef.current + 1);
                                setNomList(newNomList);
                                setNominees(newNoms);
                            }
                        }
                    }/>
            );
        } 
        console.log(nomList);
        console.log(nominees);
        setMovies(new_search);
    }, [data, nominees])


    return (
        <div className="App">
            <header className="App-header">
                <h1> SHOPPIES NOMINATIONS </h1>
            </header>

            {banner}

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
                        <div className = "movies-list">
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
