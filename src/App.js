import './App.css';
import SearchBar from './SearchBar' 
import React, { useState, useEffect } from 'react'
import Results from './Results'

const BarStyling = { width: "20rem", background: "#eeeeee", border: "none", padding: "0.5rem" };
const API_KEY = "677802be";

function App() {
    const [value, setValue] = useState('');
    const [q, setQ] = useState('');
    const [data, setData] = useState([{ Title: "" }]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(null);
        setData([{ Title: "" }]);

        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
            .then(resp => resp)
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

        console.log(data)
        console.log(error)
        console.log(loading)

        }, [q]);

    return (
        <div className="App">
            <header className="App-header">
                <h1> SHOPPIES NOMINATIONS </h1>
            </header>

            <div className="App-body">
                <div>
                    <h1> Find your Movie: </h1>
                    < input
                        type="text"
                        style={BarStyling}
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

                <h1> search: {q} </h1>
                <h1> data: {data[0]["Title"]} </h1>
                <Results data={data}/>
            </div>

        </div>
    );
}

export default App;
