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

                </div>

                <div className = "Movie__columns">
                    <h1>{this.props.title}</h1>
                    <div className = "Movie__columns">
                        {this.props.genres.map((genre, index) => <Genres genre = {genre} key ={index}/>)}
                    </div>
                    <p1>{this.props.synopsis}</p1>
                </div>
            </div>
        );
    }
}

class Genres extends  Component{
    static propTypes ={
        genre: PropTypes.string.isRequired,
    }
    render(){
        return(
            <d className = 'Genres'>
                <span>{this.props.genre}</span>
            </d>
        )
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