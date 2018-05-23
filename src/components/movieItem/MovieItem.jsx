import React, { Component } from "react";

// Assets
import "./movieItem.sass";


class MovieItem extends Component {
    render() {

        return(
            <div className="movieItem__wrapper">
                <section className="movieItem__poster">
                    <img src={this.props.movieDetails.Poster} alt={this.props.movieDetails.Title}/>
                </section>
                <section>
                    <h1 className="movieItem__title">{this.props.movieDetails.Title}</h1>
                    <p className="movieItem__genre">{this.props.movieDetails.Genre}</p>
                    <div className="ratings">
                        <p className="rating__item">rating</p>
                    </div>
                    <p className="movieItem__plot">{this.props.movieDetails.Plot}</p>
                    <div className="movieItem__cast">
                        <p className="movieItem__actor">actor</p>
                    </div>

                </section>
            </div>
        );
    }
}

export default MovieItem;