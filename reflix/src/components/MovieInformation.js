import React, { Component } from 'react'

export class MovieInformation extends Component {
  render() {
    let movie = this.props.state.movies.find(movie=>movie.id==this.props.match.params.id)
    return (
      <div>
      <span className='movie-title'>{movie.title}</span>
      <span className="font-effect-neon">({movie.year})</span>
      <div></div>
      <img className='movie-img' src={movie.img}></img>
      <div className='font-effect-shadow-multiple info'>{movie.descrShort}</div>
      </div>
    )
  }
}

export default MovieInformation;
