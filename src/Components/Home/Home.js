import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Display from '../Display/Display'
const Home = () => {
  return (
   <div className='containerHome'>
    <h1>FITNESS TRACKER</h1>
    <NavBar />
    <Display/>
   </div>
      
    
  )
}

export default Home
