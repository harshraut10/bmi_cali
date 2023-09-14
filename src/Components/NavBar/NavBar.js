import { useState } from 'react'
import './NavBar.css'
const NavBar = (props) => {

  const [bmi,setBmi]=useState(true)
  const [history,setHistory]=useState(false)

  return (
    <div className='containerNav'>
     <nav>
      <span>
     <button className={`button ${history ? 'clicked' : ''}`}  onClick={()=>{
      setHistory(true)
      setBmi(false)
      props.handler('history')

     }} >History</button>

     <button  className={`button ${bmi ? 'clicked' : ''}`}  onClick={()=>{
      setHistory(false)
      setBmi(true)
      props.handler('bmi')
     }}>BMI</button></span>
     <ul>
    <li>Signed-In as HARSH</li>
    </ul>
    
    </nav>

    </div> 
  )
}

export default NavBar
