import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
   const navigate=useNavigate()
    const location=useLocation()
    const message=location.state ? location.state.message:''
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [serverErrors,setServerErrors]=useState([])
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const formData={
          email,
          password
      }
      console.log(formData)
      try {
          const response=await axios.post('http://localhost:3018/auth/login',formData)
          // console.log(response.data)
          localStorage.setItem('token',response.data.token)
          navigate('/')
      } catch (error) {
          // console.log(error.message)
          // console.log(error.response.data.errors)
          setServerErrors(error.response.data.errors)
      }
  }
     
  return (
    <div>
       { message && <b>{message}</b>}
      <h1>Login Component</h1>
      {serverErrors.length>0 && (
            <div>
                <h3>These errors prohibited form from being saved:</h3>
                <ul>
                    {
                        serverErrors.map((ele,i)=>{
                            return <li key={i} >{ele.msg}</li>
                        })
                    }
                </ul>
            </div>
        )}
      <form onSubmit={handleSubmit}>
            <label>Enter Email</label>
            <br/>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}  />
            <br/>
            <label>Enter password</label>
            <br/>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}  />
            <br/>
            <br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Login
