import React, { Component } from 'react'
import {Home} from './Home';
import {Catalog} from './Catalog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class NavigationBar extends Component {
  
  render() {
    return (<div>
        <Link to="/">Home   </Link>
        <Link to="/catalog">Catalog </Link>
        </div>
    )
  }
}

export default NavigationBar;
