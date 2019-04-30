import React, {Component} from 'react';

class Movie extends Component{
    render() {
        return(
            <div className="Movie">
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render() {
        return(
            <div className="MoviePoster">
                <img src={this.props.poster}/>
            </div>
        );
    }
}

export default Movie;