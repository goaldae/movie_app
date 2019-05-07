import React, {Component} from 'react';
import './App.css';
import Movie from "./Movie";



class App extends Component{
    state = {
    }

    componentDidMount(){
        fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => { console.log(json.data.movies);return this.setState({movies : json.data.movies})})
            .catch(error => console.log(error))
    }

    _roadMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title = {movie.title} poster = {movie.medium_cover_image} key = {index} />

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
