import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies, isLoading: false});
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading
          ? 'loading'
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                title={movie.title}
                summary={movie.summary}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default Home;
