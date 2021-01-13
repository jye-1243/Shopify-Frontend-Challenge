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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //const [nomList, setNomList] = useState([]);
    //const [nomCount, setNomCount] = useState(0);
    const [nomList, setNomList] = useState(cookies.noms ? cookies.noms: []);
    const [nomCount, setNomCount] = useState(cookies.count ? parseInt(cookies.count): 0);
    const [banner, setBanner] = useState(null);

    // Figure out whats up here
    useEffect( () => {

        setLoading(true);
        setError(null);
        setData([]);

        fetch(`https://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
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

        let val = nomCount;
        setCookie('count', val, { path: '/' });
    }, [nomCount]);

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
                                    setCookie('noms', [], { path: '/' });
                                    setCookie('count', 0, { path: '/' });
                                    setNomCount(0);
                                    setNomList([]);
                                }
                            }>
                            Reset Cookies
                        </button>

                        <button
                            className="main-btn"
                            onClick={
                                () => {
                                    removeCookie('noms');
                                    removeCookie('count');
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
                        <MovieSearch
                            data={data}
                            nomList={nomList}
                            onClick={
                                (id, title, year) => {
                                    if (nomCount < 5) {

                                        let newNomList = [];

                                        // Fix here
                                        for (let j = 0; j < nomList.length; j++) {
                                            newNomList.push(nomList[j]);
                                        }

                                        newNomList.push(
                                            {
                                                id: id,
                                                Title: title,
                                                Year: year
                                            }
                                        )

                                        setNomCount(nomCount + 1);
                                        setNomList(newNomList);

                                        setCookie('noms', newNomList, { path: '/' });
                                    }
                                }
                            }
                        />
                    </div>

                    <div className="nominated-panel">
                        <h2 className="movie-header"> NOMINEES </h2>

                        <Nominees
                            nominees={nomList}
                            onClick={
                                (id) => {
                                    let index = 0;
                                    for (let j = 0; j < nomList.length; j++) {

                                        if (id === nomList[j]["id"]) {
                                            index = j;
                                        }
                                    }

                                    let updatedNomList = [];

                                    for (let j = 0; j < nomList.length; j++) {
                                        if (j !== index) {
                                            updatedNomList.push(nomList[j]);
                                        }
                                    }

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
