import React, { useState } from 'react'
import './Log_Reg.css'
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
const LogReg = () => {
  const [action,setAction]=useState('Sign up')
  return (
    <div>
      <h1 className='head'>FITNESS TRACKER</h1>
       <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==='Login'? null : 
          <div className='input'>
          <img src={user_icon} alt=''/>
          <input type='text' placeholder='Name'/>
        </div>
        }
       

        <div className='input'>
          '<img src={email_icon} alt=''/>
          <input type='email' placeholder='Email ID'/>
        </div>

        <div className='input'>
          '<img src={password_icon} alt=''/>
          <input type='password' placeholder='Password'/>
        </div>
      </div>
      {action==='Sign up' ? null :
          <div className='forgot-password'>Lost Password? <span>Click Here</span></div>
      } 
      
      <div className='submit-container'>
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign up</div>
        <div className={action==='Sign up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
    </div>
    </div>
    </div>
   
    
  )
}

export default LogReg
