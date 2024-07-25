import React, { useContext } from 'react'
import { UserContext } from '../App'

const Dashboard = () => {
    const {state}=useContext(UserContext)
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome,{state.user.username}!</h2>
    </div>
  )
}

export default Dashboard
