import React, {Component} from 'react';
import './App.css';
import Movie from "./Movie";

const movies = [
    {title : "Avengers", poster : "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"},
    {title : "Matrix", poster : "https://images-na.ssl-images-amazon.com/images/I/91wkDmLK3UL._RI_.jpg"},
    {title : "Iron Man3", poster : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/55/Iron_Man_3_IMAX_poster.jpg/revision/latest?cb=20130319165854"},
]

class App extends Component{
  render() {
    return (
        <div className="App">
            {movies.map(movie => {
                return <Movie title = {movie.title} poster = {movie.poster}/>
            })}
        </div>
    );
  }
}

export default App;
