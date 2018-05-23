import React, { Component } from "react";

// Components
import Search from "./search/Search.jsx";
import Results from "./results/Results.jsx";
import MovieItem from "./movieItem/MovieItem.jsx";

// Assets
import "./layout.sass";


class Layout extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            movieArray: [],
            movieDetails: "",
            cardIsOpen: false
        }

        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.getMoviesHandler = this.getMoviesHandler.bind(this)
        this.getMovieDetails = this.getMovieDetails.bind(this)
        this.closeMoviecardHandler = this.closeMoviecardHandler.bind(this)
    }

    handleChangeSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    getMoviesHandler = () => {
        if(this.state.searchValue.length != 0) {
            let queriedMovie = this.state.searchValue;

            fetch(`http://www.omdbapi.com/?apikey=4d80ca8e&s=${queriedMovie}`)
            .then(res => res.json())
            .then(movieArray => this.setState({ movieArray }));
        }
    }

    getMovieDetails = (movie) => {
        fetch(`http://www.omdbapi.com/?apikey=4d80ca8e&t=${movie}`)
        .then(res => res.json())
        .then(movieDetails => {
            this.setState({ 
                movieDetails,
                cardIsOpen: true 
            })
        });
    }

    closeMoviecardHandler = () => {
        this.setState({ cardIsOpen: false });
    }
    
    render() {
        
        return(
            <dev className="layout">
                <Search
                    searchValue={this.state.searchValue}
                    handleChangeSearch={this.handleChangeSearch}
                    getMoviesHandler={this.getMoviesHandler} />

                <Results results={this.state.movieArray} getMovieDetails={this.getMovieDetails} />
                
                {
                    this.state.cardIsOpen
                    ? <MovieItem
                        movieDetails={this.state.movieDetails}
                        closeMoviecardHandler={this.closeMoviecardHandler} />
                    : null
                }
            </dev>
        );
    }
}

export default Layout;