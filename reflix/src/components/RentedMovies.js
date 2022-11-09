import React, { Component } from 'react'
import {Movie} from './Movie';

export class RentedMovies extends Component {
  render() {
    return (<div>
              <div>rented:</div>
              <div className='movies-container'>{this.props.movies.map(movie=>
                <Movie movie={movie} func={this.props.unrentAMovie}/>
              )}</div>
            </div>
    )
  }
}

export default RentedMovies;
