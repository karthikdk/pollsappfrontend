import React, { createContext, useEffect, useReducer } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import userReducer from './reducers/userReducer'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import axios from 'axios'

export const UserContext=createContext()
export const App = () => {
  const [state,dispatch]=useReducer(userReducer,{
    user:{}
  })
  
  useEffect(()=>{
    if(localStorage.getItem('token')){
      (async()=>{
        try {
          const response=await axios.get('http://localhost:3018/api/users/account',{
            headers:{
              'Authorization':localStorage.getItem('token')
            }
          })
          dispatch({
            type:'USER_LOGIN',
            payload:response.data
          })
        } catch (error) {
            alert(error.message)
        }
      })()
    }
  },[])
  return (
   <BrowserRouter>
    <UserContext.Provider  value={{state,dispatch}} >
    <div>
        <h1>Polls App</h1>
       <NavBar/>
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

