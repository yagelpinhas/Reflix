import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {RentedMovies} from './RentedMovies';
import UnrentedMovies, {unrentedMovies} from './UnrentedMovies';

export class Catalog extends Component {
  render() {
    return (
      <div>
        <RentedMovies movies={this.props.rentedMovies} unrentAMovie={this.props.unrentAMovie}/>
        <UnrentedMovies movies={this.props.unrentedMovies} rentAMovie={this.props.rentAMovie}/>
        </div>
    )
  }
}

export default Catalog;
