import LogReg from "./Components/LogReg";
import Home from "./Components/Home/Home.js";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
function App() {
  const userID='123'
  const pw='123'
  const dispatch=useDispatch()
  const auth=useSelector((state)=> state.BMI.value)
  const [flag,setFlag]=useState(false)
  //let val=localStorage.getItem('log')
  let val
  useEffect(()=>{
    if(val === 'true'){
      setFlag(true)
    }
    else{
      setFlag(false)
    }
  
    
  },[val])

  if(val === false){
        setFlag(false)
      }

  const loginHandler=(email,pwd)=>{
    
    if(email === userID && pwd === pw){
      setFlag(true)
      console.log(flag)
      localStorage.setItem('log',true)
      val=localStorage.getItem('log')
      console.log(val)
      console.log(typeof(val))
    }
  }

  const logout=()=>{
    setFlag(false)
    localStorage.setItem('log',false)
    val=localStorage.getItem('log')
    console.log(typeof(val))
  }


  return (
    <div>
      { flag ? <Home handlerH={logout}/> :<LogReg handler={loginHandler}/>
      }
    </div>
  );
}

export default App;
