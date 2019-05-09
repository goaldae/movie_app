import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis : PropTypes.string.isRequired,
    }

    render() {
        return(
            <div className="Movie">
                <div className = "Movie__columns">
                    <MoviePoster poster={this.props.poster}/>
                    <d>{this.props.genres}</d>
                </div>

                <div className = "Movie__columns">
                    <h1>{this.props.title}</h1>
                    <p1>{this.props.synopsis}</p1>
                </div>
            </div>
        );
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired,
    }

    render() {
        return(
            <div className="MoviePoster">
                <img src={this.props.poster}/>
            </div>
        );
    }
}

export default Movie;