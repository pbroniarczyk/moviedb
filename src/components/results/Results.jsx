import React, { Component } from "react";

// Components
import ResultItem from "./ResultItem.jsx";

// Assets
import "./results.sass";


class Results extends Component {
    constructor() {
        super()
        this.state = {
            resultsArray: []
        }
    }

    componentWillMount = () => {
        fetch('http://www.omdbapi.com/?apikey=4d80ca8e&s=batman')
        .then(res => res.json())
        .then(resultsArray => this.setState({ resultsArray }));
    }

    render() {
        
        return(
            <div className="results">
                {
                    this.props.results.length != 0
                    ? this.props.results.Search.map(movie => <ResultItem movie={movie} getMovieDetails={this.props.getMovieDetails} />)
                    : null
                }
            </div>
        );
    }
}

export default Results;