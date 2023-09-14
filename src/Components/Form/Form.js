import React from 'react'
import './Form.css'
const Form = (props) => {
  return (
    <div>
      <div>
       <label>Enter weight in kgs</label><br></br>
       <input type='number'/><br></br>
       <label>Enter height in cm</label><br></br>
       <input type='number'/>
       <button type='submit'>Submit</button>
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
