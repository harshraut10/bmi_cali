import React from 'react'
import {useState} from  'react'
import { useDispatch } from 'react-redux'
import { changeFn } from '../../ReduxStore/Redux';

const Form2 = () => {

  const dispatch=useDispatch();

  const [wt,setWt]= useState()
  const [ht,setHt]=useState()
  const wtHandler=(e)=>{
    setWt(e.target.value)
  }

  const htHandler=(e)=>{
    setHt(e.target.value)
  }

  const submitHandler=()=>{
    const weight=Number(wt)
    const height=Number(ht)/100
    const BMI=703*(weight/(height*height))/10000
    dispatch(changeFn({BMImetric:0 , BMIstd:BMI}))
    
  }
  return (
    <div className='form'>
       <label>Enter weight in Lbs</label><br></br>
       <input onChange={wtHandler} type='number'/><br></br>
       <label>Enter height in Inches</label><br></br>
       <input onChange={htHandler} type='number'/>
       <button onClick={submitHandler} type='submit'>Submit</button>
    </div>
  )
}

export default Form2
