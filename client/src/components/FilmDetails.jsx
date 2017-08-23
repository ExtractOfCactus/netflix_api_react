import React from 'react';

class FilmDetails extends React.Component {

  render() {
    if (!this.props.film) return null;
    return (
      <div>
        <h3>
          Title: {this.props.film.show_title}
        </h3>
        <p>Year: {this.props.film.release_year}</p>
        <p>Director: {this.props.film.director}</p>
        <img src={this.props.film.poster} />
      </div>
    )
  }
}

export default FilmDetails;