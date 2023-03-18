import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { InputForm } from './InputForm';
import './styles.css'


const Signup = () => {
  const [ErrorMsg, setErrorMsg] = useState('');
  const [params, setparams] = useState({
    name: '',
    email: '',
    password: '',
    role:''
  })
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const radioBtn = document.getElementsByClassName('radioBtn');
    console.log(radioBtn)
    for (let index = 0; index < radioBtn.length; index++) {
      if (radioBtn[index].checked) {
        setparams((prev)=>({...prev,role:radioBtn[index].id}))
      }
    }
      
    console.log(params.role);
    if (!params.name || !params.email || !params.password) {
      setErrorMsg('Please fill all the fields');
      return;
    }
    if (!params.role) {
      setErrorMsg('Please select your Role');
      return;
    }
    setErrorMsg('');
    try {
      const response = await fetch(`http://localhost:5000/auth/user/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: params.name, email: params.email, password: params.password, role:params.role })
      })
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
        localStorage.setItem('token', json.authToken)
        navigate('/events');
      }
      else {
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
        <h1>SignUp</h1>
        <InputForm label='Name' placeholder='Enter your name' type='text'
          onChange={(e) => { setparams((prev) => ({ ...prev, name: e.target.value })) }} />
        <InputForm label='Email' placeholder='Enter your email' type='text'
          onChange={(e) => { setparams((prev) => ({ ...prev, email: e.target.value })) }} />
        <InputForm label='Password' placeholder='Enter your Password' type='password'
          onChange={(e) => { setparams((prev) => ({ ...prev, password: e.target.value })) }} />
        <div style={{fontSize:'15px',width:'80%'}}>
          <label htmlFor="user" style={{display:'inline-block'}}>User</label>
          <input class='radioBtn' type="radio" name="Role" value='user' id="user" style={{height:'10px',margin:'10px',width:'auto',display:'inline-block'}} /><br/>
          <label htmlFor="admin" style={{display:'inline-block'}}>Admin</label>
          <input class='radioBtn' type="radio" name="Role" value='admin' id="admin" style={{height:'10px',margin:'10px',width:'auto',display:'inline-block'}} />
        </div>
        {ErrorMsg && <p className="ErrorMsg">{ErrorMsg}</p>}
        <button onClick={handleSubmit}>Sign Up</button>
        <p>Already a User? <span><Link className='footer-link' to='/login'>Login</Link></span></p>
      </div>
    </div >
  )
}

export default Signup