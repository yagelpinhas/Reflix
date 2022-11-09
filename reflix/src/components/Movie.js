import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export class Movie extends Component {
  rent=()=>{
    this.props.rentAMovie(this.props.movie.id)
  } 
  unrent=()=>{
    this.props.unrentAMovie(this.props.movie.id)
  } 
  render() {
    return (
        <div className='movie-item'>
         <Link to={`/movies/${this.props.movie.id}`}>
        <img class="movie-img "src={this.props.movie.img}></img>
        </Link>  
        {/* <button onClick={this.toggle}>{this.props.movie.isRented ? "-" : "+" }</button> */}
        <div></div>
          <span class="material-symbols-outlined" onClick={this.rent}>
          add_circle
          </span>
          <span class="material-symbols-outlined" onClick={this.unrent}>
            remove
            </span>
        </div>
    )
  }
}

export default Movie;