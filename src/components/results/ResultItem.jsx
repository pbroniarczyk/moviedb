import React, { Component } from "react";

// Assets
import "./results.sass";


class ResultItem extends Component {
    render() {
        console.log("MOVIE ITEM", this.props)
        const { movie} = this.props;
        return(
            <div className="results__item" onClick={() => this.props.getMovieDetails(this.props.movie.Title)}>
                <div className="item__head">
                    <h1 className="item__title">{movie.Title}</h1>
                    <p className="item__year">{movie.Year}</p>
                </div>
                <div className="item__poster">
                    <img className="poster__img" src={movie.Poster} alt={movie.Title}/>
                </div>
            </div>
        );
    }
}

export default ResultItem;