import React, { Component } from "react";

// Assets
import "./results.sass";


class ResultItem extends Component {
    render() {
        console.log("MOVIE ITEM", this.props)
        const { movie} = this.props;
        return(
            <div className="results__item">
                <h1 classNanem="item__title">{movie.Title}</h1>
                <p classNanem="item__year">{movie.Year}</p>
                <div className="item__poster">
                    <img className="poster__img" src={movie.Poster} alt={movie.Title}/>
                </div>
            </div>
        );
    }
}

export default ResultItem;