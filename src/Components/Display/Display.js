import React, { useState } from 'react'
import './Display.css'
import Form from '../Form/Form'
import Form2 from '../Form/Form2'
const Display = () => {
  const [clickedM, setClickedM]=useState(true)
  const [clickedS, setClickedS]=useState(false)
  const [flag,setFlag]=useState('')


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
      <input type='text'/>


      
     

      </div>
      
    </div>
  )
}

export default Display
