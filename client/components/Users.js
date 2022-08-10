import React from 'react'
import {connect} from 'react-redux'

const Users = props => {
  return (
    <div>
      <h1 className="title">Users</h1>
      <ul className="all-product-page">
          {props.users.map((user, index) => {
              return <li key = {index} className="column" id="user">
                <div>Name: {user.firstName} {user.lastName}</div>
                <div>Email: {user.email}</div>
                <div>password: ********</div> </li>
          })}
      </ul>
    </div>
  )
}

const mapState = state => {
  return {
    users: state.users
  }
}

export default connect(mapState)(Users)
