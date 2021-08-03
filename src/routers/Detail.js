import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const {
      location: {state},
    } = this.props;
    if (state) {
      return (
        <div>
          <img src={state.poster} title={state.title} alt={state.title}></img>
          <h1>{state.title}</h1>
          <h3>{state.summary}</h3>
          <h4>{state.year}</h4>
          <h4>{state.rating}</h4>
          <ul>
            {state.genres.map((genre, number) => (
              <li key={number}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
