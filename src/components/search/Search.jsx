import React, { Component } from "react";

// Assets
import "./search.sass";


class Search extends Component {
    render() {
        return(
            <div className="search">
                <input
                    name="searchValue"
                    className="search__input"
                    value={this.props.searchValue}
                    onChange={this.props.handleChangeSearch}
                    type="text" />
                <button
                    className="search__btn button"
                    onClick={this.props.getMoviesHandler}
                >
                    search
                </button>
            </div>
        );
    }
}

export default Search;