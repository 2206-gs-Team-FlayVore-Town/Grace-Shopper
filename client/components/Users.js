import React from 'react'
import {connect} from 'react-redux'

const Users = props => {
  return (
    <ul>
        {props.users.map((user, index) => {
        console.log(user)
            return <li key = {index}>{user.name}</li>
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
