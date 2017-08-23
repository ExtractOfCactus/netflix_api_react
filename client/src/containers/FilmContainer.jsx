import React from 'react';

import FilmSelector from '../components/FilmSelector.jsx'
import FilmDetails from '../components/FilmDetails.jsx'

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
    const url = "https://netflixroulette.net/api/api.php?actor=Keanu%20Reeves";
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
        <h2> Keanu Reeves Films </h2>
        <FilmSelector films={this.state.films} selectFilm={this.setChosenFilm}/>
        <FilmDetails film={this.state.chosenFilm}/>
      </div>
    );
  }
}

export default FilmContainer;