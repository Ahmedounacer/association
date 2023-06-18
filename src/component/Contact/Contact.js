import React from 'react'
import "./Contact.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
function Contact() {
  return (
    <div className='Contact'>
        <div className='card'>
            telephone
            <PhoneAndroidIcon/>
        </div>
        <div className='card'>Email
        <MarkunreadIcon/></div>
        <div className='card'>Localisation
        <LocationOnIcon/></div>
    </div>
  )
}

export default Contact