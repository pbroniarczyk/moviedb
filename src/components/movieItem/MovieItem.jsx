import React, { Component } from "react";

// Assets
import "./movieItem.sass";


class MovieItem extends Component {
    render() {
        console.log("RENDER MOVIE DETAILS", this.props)
        return(
            <div className="movieItem">
                <div className="movieItem__wrapper">
                    <button className="close">X</button>
                    <section className="movieItem__poster">
                        <img className="poster__image" src={this.props.movieDetails.Poster} alt={this.props.movieDetails.Title}/>
                    </section>
                    <section className="movieItem__details">
                        <h1 className="movieItem__title">{this.props.movieDetails.Title}</h1>
                        <p className="movieItem__genre">{this.props.movieDetails.Genre}</p>
                        <div className="ratings">
                            {
                                this.props.movieDetails.Ratings.map(rating => 
                                    <div className="rating__item">
                                        <span classname="rating__source">{rating.Source}</span>
                                        <span className="rating__score">{rating.Value}</span>
                                    </div>
                                )
                                 
                            }
                        </div>
                        <p className="movieItem__plot">{this.props.movieDetails.Plot}</p>
                        <div className="movieItem__cast">
                            <p className="movieItem__actors">{this.props.movieDetails.Actors}</p>
                        </div>

                    </section>
                </div>
            </div>
        );
    }
}

export default MovieItem;