import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div>
      <label>Enter weight in kgs</label><br></br>
      <input type='number'/><br></br>
      <label>Enter height in cm</label><br></br>
      <input type='number'/>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Form
