import React from 'react'
import "./home.css"
import decove from "../../decove.jpeg"
function Home() {
  return (
    <div className='home'>
      <div className='left'>
            <h1>جمعية شباب توشعة </h1>
            
            <h1>للتنمية والمحافظة على البيئة</h1>
            <button>Explorer</button>
        </div>
      <div className='right'>
            <img src={decove} alt="decove"/>
        </div>
        
        
    </div>
  )
}

export default Home