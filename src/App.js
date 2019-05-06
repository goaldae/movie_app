import React, {Component} from 'react';
import './App.css';
import Movie from "./Movie";



class App extends Component{
    state = {
    }

    _roadMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title = {movie.title} poster = {movie.poster} key = {index} />
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

  componentDidMount() {
        setTimeout(()=>{
            this.setState({
                movies : [
                    {title : "Avengers", poster : "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"},
                    {title : "Matrix", poster : "https://images-na.ssl-images-amazon.com/images/I/91wkDmLK3UL._RI_.jpg"},
                    {title : "Iron Man3", poster : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/55/Iron_Man_3_IMAX_poster.jpg/revision/latest?cb=20130319165854"},
                    {title : "loveholic", poster : "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Loveholic%2C_2005_TV_series.jpg/250px-Loveholic%2C_2005_TV_series.jpg"}
                ]
            })
        }, 2000)
  }

}



export default App;
