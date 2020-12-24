import React from 'react';

const BarStyling = { width: "20rem", background: "#eeeeee", border: "none", padding: "0.5rem" };

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("Hi!");
    }

    keyUp(event) {
        if (event.key === "Enter") {
            this.handleSubmit();
        }
    }

    render() {
        return (
            <div>
                <h1> Find your Movie: </h1>
                <form onSubmit={this.handleSubmit}>
                    < input
                        type="text"
                        style={BarStyling}
                        key="search-bar"
                        value={this.state.value}
                        placeholder={"Movie Title"}
                        onChange={this.handleChange}
                        onKeyUp={this.onKeyUp}
                    />
                    <input type="submit" value = "Search"/>
                </form>
            </div>
        );
    }
}

export default SearchBar