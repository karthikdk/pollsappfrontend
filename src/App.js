import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
const App = () => {
  return (
   <BrowserRouter>
       <div>
        <h1>Polls App</h1>
        <nav>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/register' >Register</Link></li>
          <li><Link to='/login' >Login</Link></li>
        </nav>


        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
        </Routes>

      </div>
   </BrowserRouter>
  )
}

export default App
