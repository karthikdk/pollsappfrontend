import React, { createContext, useReducer } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import userReducer from './reducers/userReducer'
import Dashboard from './components/Dashboard'
import isEmpty from 'lodash/isEmpty'

export const UserContext=createContext()
export const App = () => {
  const [state,dispatch]=useReducer(userReducer,{
    user:{}
  })
  
  const handleLogout=()=>{
    localStorage.removeItem('token')
   dispatch({type:'LOGOUT_USER'})
  }
  return (
   <BrowserRouter>
    <UserContext.Provider  value={{state,dispatch}} >
    <div>
        <h1>Polls App</h1>
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
                <li><Link to='/logout' onClick={handleLogout}>logout</Link></li>
              </React.Fragment>
            )
          } 
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
        </Routes>

      </div>
    </UserContext.Provider>
      
   </BrowserRouter>
  )
}

