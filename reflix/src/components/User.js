import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
        <div className="user-box">{this.props.name}</div>
    )
  }
}

export default User;