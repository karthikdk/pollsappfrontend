import React, { createContext, useReducer } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import userReducer from './reducers/userReducer'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'


export const UserContext=createContext()
export const App = () => {
  const [state,dispatch]=useReducer(userReducer,{
    user:{}
  })
  
  
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

