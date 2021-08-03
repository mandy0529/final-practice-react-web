import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({title, summary, year, rating, genres, poster}) {
  return (
    <Link
      to={{
        pathname: '/movie/:id',
        state: {
          title,
          summary,
          year,
          rating,
          genres,
          poster,
        },
      }}
    >
      <div>
        <img src={poster} title={title} alt={title}></img>
        <h1>✅ title : {title} </h1>
        <h2> summary:{summary.slice(0, 100)}....</h2>
        <h4> year : {year}</h4>
        <h4> rating:{rating}</h4>
        <ul>
          {genres.map((genre, number) => (
            <li key={number}>{genre}</li>
          ))}
        </ul>
        <hr></hr>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
