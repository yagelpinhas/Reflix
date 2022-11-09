import React, { Component } from 'react'
import {Movie} from './Movie';

export class RentedMovies extends Component {
  render() {
    return (<div>
              <div className='renting-title'>Rented:</div>
              <div className='movies-container'>{this.props.movies.map(movie=>
                <Movie movie={movie} unrentAMovie={this.props.unrentAMovie} rentAMovie={this.props.rentAMovie}/>
              )}</div>
            </div>
    )
  }
}

export default RentedMovies;
