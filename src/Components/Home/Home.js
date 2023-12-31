import React, { useState ,useEffect } from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Display from '../Display/Display'
import History from '../History/History'
const Home = (props) => {
  

  const [status,setStatus]=useState('')
  const [hist,setHist]=useState(false)
  const [disp,setDisp]=useState(true)

  const handler=()=>{
    localStorage.setItem('log',false)
    props.handlerH()
  }
  const flagHandler=(flag)=>{
    console.log(flag)
    if(flag === 'bmi'){
      setHist(false)
      setDisp(true)
    }
    else{
      setHist(true)
      setDisp(false)
    }
  }

  let content
  if(disp)
  {
    content=<Display/>
  }
  else if(hist){
    content=<History/>
  }
  return (
   <div className='containerHome'>
    <h1>FITNESS TRACKER</h1>
    <NavBar handler={flagHandler}/>
    {content}
    <button onClick={handler}>Back</button>
   </div>
      
    
  )
}

export default Home
