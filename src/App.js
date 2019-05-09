import React, {Component} from 'react';
import './App.css';
import Movie from "./Movie";

class App extends Component{
    state = {
    }

    componentDidMount(){
        this._makeMovies();
    }

    _makeMovies = async () => {
        const movies = await this._callApi();
        this.setState({movies})
    }

    _callApi = () => {
       return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(error => console.log(error))
    }

    _roadMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie
                title = {movie.title}
                poster = {movie.medium_cover_image}
                key = {index}
                genres = {movie.genres}
                synopsis = {movie.synopsis}
            />

        })
        return movies;
    }

  render() {
    return (
        <div className="App">
            {this.state.movies ? this._roadMovies() : "roading"}
        </div>

    );
  }
}

export default App;
