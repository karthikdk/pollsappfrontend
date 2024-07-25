import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [serverErrors,setServerErrors]=useState([])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData={
            username,
            email,
            password
        }
        // console.log(formData)
        try {
            const response=await axios.post('http://localhost:3018/auth/register',formData)
            // console.log(response.data) success
            navigate('/login',{state:{message:response.data.message}})
        } catch (error) {
            // console.log(error.message)
            // console.log(error.response.data.errors)
            setServerErrors(error.response.data.errors)
        }
    }
  return (
    <div>
        <h2>Registration Page</h2>
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
            <label>Enter UserName</label>
            <br/>
            <input type='text' value={username} onChange={e=>setUsername(e.target.value)}  />
            <br/>
            <label>Enter Email</label>
            <br/>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}  />
            <br/>
            <label>Enter password</label>
            <br/>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}  />
            <br/>
            <br/>
            <input type='submit' value='save' />
        </form>
    </div>
  )
}

export default Register
