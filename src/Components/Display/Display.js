import React, { useState } from 'react'
import './Display.css'
import Form from '../Form/Form'
import Form2 from '../Form/Form2'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {useEffect} from 'react'
const Display = () => {
  const bmiVal=useSelector((state)=> state.BMI.value)
  const [clickedM, setClickedM]=useState(true)
  const [clickedS, setClickedS]=useState(false)
  const [flag,setFlag]=useState('')
  let val=''
  let valS=''

  if(clickedM)
 { 
   if(bmiVal.BMImetric === 0 )
  {
    val=''
  }
  else if(bmiVal.BMImetric <= 18.4){
    val='underweight'
  }
  else if(bmiVal.BMImetric > 18.4 && bmiVal.BMImetric <=24.9){
    val='Normal'
  }
  else if(bmiVal.BMImetric > 25.0 && bmiVal.BMImetric <=39.9)
  {
    val='Overweight'
  }
 
  else{
    val='Obese'
  }}

  if(clickedS){

   if(bmiVal.BMIstd === 0 )
    {
      valS=''
    }
   else if(bmiVal.BMIstd <= 18.4){
      valS='underweight'
    }
    else if(bmiVal.BMIstd > 18.4 && bmiVal.BMIstd <=24.9){
      valS='Normal'
    }
    else if(bmiVal.BMIstd > 25.0 && bmiVal.BMIstd <=39.9)
    {
      valS='Overweight'
    }
    else{
      valS='Obese'
    }
  }
  
  
  return (
    <div className='containerDisp'>
     <div className='margin'>
      <button className={`btn_adjs ${clickedS ? 'clicked' : ''}`} onClick={
        ()=>{
          setClickedS(true)
          setClickedM(false)
          setFlag('std')
        }
      }>Standard</button>

      <button className={`btn_adjs ${clickedM ? 'clicked' : ''}`} onClick={
        ()=>{
          setClickedS(false)
          setClickedM(true)
          setFlag('metric')
        }}
        >Metric</button>
        </div>
      <div className='cdisp'>
      {
        clickedM ? <Form /> :  <Form2/>
      }
      <label>Your BMI</label><br></br>
      <input value={clickedM ? bmiVal.BMImetric: bmiVal.BMIstd} type='text'/>
      <div className='result'>
        {
          clickedM ? <h1>{val}</h1> : <h1>{valS}</h1>
        }
      </div>
      {/* <h1>{bmiVal.BMImetric === 0  ? valS : val }</h1> */}
      </div>
      
    </div>
  )
}

export default Display
