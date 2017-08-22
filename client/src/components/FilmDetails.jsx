import React from 'react';

class FilmDetails extends React.Component {

  render() {
    if (!this.props.film) return null;
    <h3>
      Title: {this.props.film.show_title}
    </h3>
  }
}

export default FilmDetails;