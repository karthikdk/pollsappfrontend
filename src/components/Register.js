import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
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
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
        <h2>Registration Page</h2>
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
