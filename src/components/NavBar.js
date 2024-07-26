import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import { UserContext } from '../App'
const NavBar = () => {
    const {state,dispatch}=useContext(UserContext)
    const handleLogout=()=>{
        localStorage.removeItem('token')
        dispatch({type:'LOGOUT_USER'})
      }
  return (
    <div>
       <nav>
          <li><Link to='/' >Home</Link></li>
          {
            isEmpty(state.user) ? (
              <React.Fragment>
                  <li><Link to='/register' >Register</Link></li>
                  <li><Link to='/login' >Login</Link></li>
              </React.Fragment>
            ):(
              <React.Fragment>
                <li><Link to='/dashboard'>dashboard</Link></li>
                <li><Link to='/' onClick={handleLogout}>logout</Link></li>
              </React.Fragment>
            )
          } 
        </nav>
    </div>
  )
}

export default NavBar
