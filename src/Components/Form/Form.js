import React from 'react'
import './Form.css'
import {useState} from  'react'
import { useDispatch } from 'react-redux'
import { changeFn } from '../../ReduxStore/Redux';

const Form = (props) => {


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
    const BMI=(weight/(height*height))
    dispatch(changeFn({BMImetric:BMI , BMIstd:0}))
    
  }
  return (
    <div>
      <div className='form'>
       <label>Enter weight in kgs</label><br></br>
       <input onChange={wtHandler} type='number'/><br></br>
       <label>Enter height in cm</label><br></br>
       <input onChange={htHandler} type='number'/>
       <button onClick={submitHandler} type='submit'>Submit</button>
       </div>
      {/* {
       props.flag === 'metric' ?
       (
        <div>
       <label>Enter weight in kgs</label><br></br>
       <input type='number'/><br></br>
       <label>Enter height in cm</label><br></br>
       <input type='number'/>
       <button type='submit'>Submit</button>
       </div>
       ) :
       ( <div>
       <label>Enter weight in Lbs</label><br></br>
       <input type='number'/><br></br>
       <label>Enter height in Feet</label><br></br>
       <input type='number'/>
       <button type='submit'>Submit</button>
       </div>)
      }
       */}
      
    </div>
  )
}

export default Form
