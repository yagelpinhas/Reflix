import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export class Movie extends Component {
  toggle=()=>{
    this.props.func(this.props.movie.id)
  }  
  render() {
    return (
        <div className='movie-item'>
         <Link to={`/movies/${this.props.movie.id}`}>
        <img class="movie-img "src={this.props.movie.img}></img>
        </Link>  
        <button onClick={this.toggle}>{this.props.movie.isRented ? "-" : "+" }</button>
        </div>
    )
  }
}

export default Movie;