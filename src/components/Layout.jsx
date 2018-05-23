import React, { Component } from "react";

// Components
import Search from "./search/Search.jsx";
import Results from "./results/Results.jsx";

// Assets
import "./layout.sass";


class Layout extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            movieArray: []
        }

        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.getMoviesHandler = this.getMoviesHandler.bind(this)
    }

    handleChangeSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    getMoviesHandler = () => {
        console.log("CLICK")
        if(this.state.searchValue.length != 0) {
            let queriedMovie = this.state.searchValue
            console.log("SEARCH === ", queriedMovie)

            fetch(`http://www.omdbapi.com/?apikey=4d80ca8e&s=${queriedMovie}`)
            .then(res => res.json())
            .then(movieArray => this.setState({ movieArray }));
        }
    }
    
    render() {
        console.log("RENDER", this.state.searchValue)
        return(
            <dev className="layout">
                <Search
                    searchValue={this.state.searchValue}
                    handleChangeSearch={this.handleChangeSearch}
                    getMoviesHandler={this.getMoviesHandler} />
                <Results results={this.state.movieArray} />
            </dev>
        );
    }
}

export default Layout;