import React from 'react'
import logo from "../../logo.png"
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
    <img src={logo}/>   
    
         </div>

    <ul className='headers'>
        <li><a href="#">Acceuil</a></li>
        <li><a href="#">Activités</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Contact</a></li>
        
    </ul>
    </div>

  )
}

export default Navbar