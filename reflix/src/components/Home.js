import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {User} from './User';

export class Home extends Component {
  render() {
    return (<div>
            <div>Who's Watching?</div>
            <div id="users-template">
            {this.props.users.map(name=><User name={name}/>)}
            </div>
        </div>
    )
  }
}

export default Home;