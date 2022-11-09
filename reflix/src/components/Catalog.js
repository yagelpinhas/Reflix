import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {RentedMovies} from './RentedMovies';
import UnrentedMovies, {unrentedMovies} from './UnrentedMovies';

export class Catalog extends Component {

  handleChange=(event)=>{
    let inputText = event.target.value
    this.props.setQuery(inputText)
  }
  render() {
    return (
      <div>
        <div id="search-container">
        <input className='movie-input' type="text" name="name" placeholder='movie name' onChange={this.handleChange}/>
         </div>
        <RentedMovies movies={this.props.rentedMovies} unrentAMovie={this.props.unrentAMovie}/>
        <UnrentedMovies movies={this.props.unrentedMovies} rentAMovie={this.props.rentAMovie}/>
        </div>
    )
  }
}

export default Catalog;
