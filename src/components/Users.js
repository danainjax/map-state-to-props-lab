import React, { Component } from 'react'
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {
  render() {
    console.log(this.props)
    let users = this.props.users.map((user, index) => (
      <li key={index}>
        {user.username} - {user.hometown}
      </li>
    ))

    return (
      <div>
        Users List:
        {this.props.numOfUsers}
        <ul>{users}</ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numOfUsers: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
