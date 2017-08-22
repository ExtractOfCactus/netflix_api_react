import React from 'react';

import FilmSelector from '../components/FilmSelector.jsx'

class FilmContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      chosenFilm: null
    };
    this.setChosenFilm = this.setChosenFilm.bind(this);
  }

  setChosenFilm(film) {
    this.setState({chosenFilm: film})
  }

  componentDidMount() {
    const url = "http://netflixroulette.net/api/api.php?actor=Keanu%20Reeves";
    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
      if (request.status !== 200 ) return;
      const jsonString = request.responseText;
      const filmData = JSON.parse(jsonString);
      this.setState({ films: filmData})
    });

    request.open('GET', url);
    request.send();
  }

  render() {
    return(
      <div>
        <h2> Film Container </h2>
      </div>
    );
  }
}

export default FilmContainer;