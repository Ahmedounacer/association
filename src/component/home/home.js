import React from 'react'
import "./home.css"
import decove from "../../decove.jpeg"
function Home() {
  return (
    <div className='home'>
        <div className='left'>
            <h1>Découvrir</h1>
            <h1>Nos</h1>
            <h1>Activités</h1>
            <button>Explorer</button>
        </div>
        <div className='right'>
            <img src={decove} alt="decove"/>
        </div>
    </div>
  )
}

export default Home