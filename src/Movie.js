import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

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
                <div className = "Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title} />
                </div>
                <div className = "Movie__Column">
                    <h1>{this.props.title}</h1>
                    <div className = "Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre  genre = {genre} key ={index}/>)}
                    </div>
                    <div className="Movie__Synopsis">
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class MovieGenre  extends  Component{
    static propTypes ={
        genre: PropTypes.string.isRequired,
    }
    render(){
        return(
            <d className = "Movie__Genre">
                <span>{this.props.genre} </span>
            </d>
        )
    }
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;