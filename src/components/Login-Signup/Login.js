import React, { useState } from 'react'
import { InputForm } from './InputForm'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [ErrorMsg, setErrorMsg] = useState('');
  const [params, setparams] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if(!params.email || !params.password){
      setErrorMsg('Please fill all the fields');
      return;
    }
    setErrorMsg('');
    try {
      const response = await fetch(`http://localhost:5000/auth/user/login`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: params.email, password: params.password})
      })
      const json = await response.json();
      if(json.success===true){
        localStorage.setItem('token',json.authToken)
        navigate('/events');
      }
      else{
        console.log(json);
        setErrorMsg(json?.error[0]?.msg || json?.error);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  }
  return (
    <div className="main-div" >
      <div className="center-div">
        <h1>Login</h1>
        <InputForm label='Email' placeholder='Enter your email' type='text'
          onChange={(e) => { setparams((prev) => ({ ...prev, email: e.target.value })) }} />
        <InputForm label='Password' placeholder='Enter your Password' type='password'
          onChange={(e) => { setparams((prev) => ({ ...prev, password: e.target.value })) }} />
        {ErrorMsg && <p className="ErrorMsg">{ErrorMsg}</p>}
        <button onClick={handleSubmit}>Login</button>
        <p>New User? <span><Link className='footer-link' to='/signup'>Sign Up</Link></span></p>
      </div>
    </div >
  )
}

export default Login