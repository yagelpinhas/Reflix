import React, { Component } from 'react'
import {Movie} from './Movie';

export class RentedMovies extends Component {
  render() {
    return (<div>
              <div>unrented:</div>
              <div className='movies-container'>{this.props.movies.map(movie=>
                <Movie movie={movie} func={this.props.unrentAMovie}/>
              )}</div>
            </div>
    )
  }
}

export default RentedMovies;
