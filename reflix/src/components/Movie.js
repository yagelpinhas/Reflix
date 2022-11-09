import React, { Component } from 'react'

export class Movie extends Component {
  toggle=()=>{
    this.props.func(this.props.movie.id)
  }  
  render() {
    return (
        <div className='movie-item'>
        <img class="movie-img "src={this.props.movie.img}></img>
        <button onClick={this.toggle}>{this.props.movie.isRented ? "-" : "+" }</button>
        </div>
    )
  }
}

export default Movie;