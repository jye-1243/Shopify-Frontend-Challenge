import './App.css';
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import Nominees from './Nominees'
import MovieSearch from './MovieSearch'

const API_KEY = "677802be";

function App() {

    const [cookies, setCookie, removeCookie] = useCookies(['cookies']);

    const [value, setValue] = useState('');
    const [q, setQ] = useState('');
    const [data, setData] = useState([]);
    const [nomList, setNomList] = useState(cookies.noms ? cookies.noms: []);
    const [nomCount, setNomCount] = useState(cookies.count ? parseInt(cookies.count): 0);
    const [banner, setBanner] = useState(null);
    const [searchMessage, setSearchMessage] = useState("");

    // Fetch data from API when query is updated
    useEffect( () => {

        setData([]);

        fetch(`https://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    console.log(response.Error);
                    if (q) {
                        setSearchMessage("No movies found with a title containing: '" + q + "'");
                    }
                    else {
                        setSearchMessage("No movie title was given.")
                    }
                }
                else {
                    setData(response.Search);
                    setSearchMessage("");
                }

            })
            .catch(({ message }) => {
                console.log(message);
            })
    }, [q]);

    // Set nomination banner to open when five movies are nominated
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

        let val = nomCount;
        setCookie('count', val, { path: '/' });
    }, [nomCount]);

    // Return app with search bar, panel for movie searches, and nominees
    return (
        <div className="App">
            <header className="App-header">
                <h1> SHOPPIES NOMINATIONS </h1>

            </header>

            <div className="App-body">
                <div className="main-bar">
                    <div className = "search-panel">
                        <h2> Find Your Movie: </h2>
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

                        <button className="main-btn"
                            onClick={() => setQ(value)}> 
                            Search
                        </button>
                    </div>
                    <div className="cookies-bar">
                        <button
                            className="main-btn"
                            onClick={
                                () => {
                                    // Reset cookies and nom list
                                    setCookie('noms', [], { path: '/' });
                                    setCookie('count', 0, { path: '/' });
                                    setNomCount(0);
                                    setNomList([]);
                                }
                            }>
                            Reset Selection
                        </button>

                        <button
                            className="main-btn"
                            onClick={
                                () => {
                                    // Delete cookies and reset nom list
                                    removeCookie('noms');
                                    removeCookie('count');

                                    setNomCount(0);
                                    setNomList([]);
                                }
                            }>
                        Remove Cookies
                        </button>
                    </div>
                </div>
                
                {banner}

                <div className="movie-panel">
                    <div className="result-panel">
                        <h2 className="movie-header"> SEARCH RESULTS </h2>
                        <p> {searchMessage} </p>
                        <MovieSearch
                            data={data}
                            nomList={nomList}
                            onClick={
                                (id, title, year) => {
                                    if (nomCount < 5) {

                                        // Allow new searches while fewer than five nominees
                                        let newNomList = [];

                                        // Set up new nominations list
                                        for (let j = 0; j < nomList.length; j++) {
                                            newNomList.push(nomList[j]);
                                        }

                                        // Add new movie to nom list
                                        newNomList.push(
                                            {
                                                id: id,
                                                Title: title,
                                                Year: year
                                            }
                                        )

                                        // Set new nom counts and new nom list
                                        setNomCount(nomCount + 1);
                                        setNomList(newNomList);

                                        setCookie('noms', newNomList, { path: '/' });
                                    }
                                }
                            }
                        />
                    </div>

                    <div className="nominated-panel">
                        <h2 className="movie-header" id="nominee-header"> NOMINEES </h2>

                        <Nominees
                            nominees={nomList}
                            onClick={
                                (id) => {
                                    // Button to remove nominee from nominations
                                    let index = 0;

                                    // Check which button was pressed
                                    for (let j = 0; j < nomList.length; j++) {

                                        if (id === nomList[j]["id"]) {
                                            index = j;
                                        }
                                    }

                                    // Remove corresponding item in nominations list
                                    let updatedNomList = [];

                                    for (let j = 0; j < nomList.length; j++) {
                                        if (j !== index) {
                                            updatedNomList.push(nomList[j]);
                                        }
                                    }

                                    // Set new values
                                    setNomList(updatedNomList);
                                    setCookie('noms', updatedNomList, { path: '/' });
                                    setNomCount(nomCount - 1);

                                }
                                            
                            }/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
