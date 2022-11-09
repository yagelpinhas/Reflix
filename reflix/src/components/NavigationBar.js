import React, { Component } from 'react'
import {Home} from './Home';
import {Catalog} from './Catalog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class NavigationBar extends Component {
  
  render() {
    return (<div id="navigation-bar">
        <Link className='linkInNavigationBar' to="/">Home</Link>
        <Link className='linkInNavigationBar' to="/catalog">Catalog </Link>
        </div>
    )
  }
}

export default NavigationBar;
