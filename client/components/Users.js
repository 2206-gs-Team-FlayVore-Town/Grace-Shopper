import React from 'react'
import {connect} from 'react-redux'

const Users = props => {
  console.log(props)
  return (
    <ul>
        {props.users.map((user, index) => {
        console.log(user)
            return <li key = {index}>Name: {user.firstName} {user.lastname} | Email: {user.email} | password: ******** </li>
        })}
    </ul>
  )
}

const mapState = state => {
  return {
    users: state.users
  }
}


export default connect(mapState)(Users)
