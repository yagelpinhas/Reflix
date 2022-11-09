import React, { Component } from 'react'

export class RentedMovies extends Component {
  
  render() {
    return (<div>
              <div>rented:</div>
              <div className='movies-container'>{this.props.movies.map(movie=>
                <div className='movie-item'>
                  <img className="movie-img "src={movie.img}></img>
                  <button onClick={this.props.unrentAMovie(movie.id)}>-</button>
                </div>
              )}</div>
            </div>
    )
  }
}

export default RentedMovies;
