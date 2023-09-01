import React from 'react'
import './Display.css'
import Form from '../Form/Form'
const Display = () => {
  return (
    <div className='containerDisp'>
      <div className='btn_adjs'>
      <button>Standard</button>
      <button>Metric</button>
      </div>
      <div className='cdisp'>
      
      <Form/>
      </div>
      
    </div>
  )
}

export default Display
