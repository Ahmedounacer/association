import './App.css';
import Activity from './component/Activity/Activity';
import Contact from './component/Contact/Contact';
import Home from './component/home/home';
import Navbar from './component/navbar/navbar';
import logo from "./logo.png"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function App() {
  return (
    <div className="App">
      
      <div className='navbar'>
        <div className='logo'>
            <img src={logo}/>   
    
         </div>
    <ul className='headers'>
        <li><a href="#home">الرئيسية</a></li>
        <li><a href="#activity">أنشطة الجمعية</a></li>
        <li><a href="#">حول الجمعية</a></li>
        <li><a href="#contact">التواصل</a></li>
        
    </ul>
    </div>
      <Home className="home"/>
      <Activity id="activity"/>
      <Contact className="contact"/>
      
      <FloatingWhatsApp  phoneNumber=''  accountName=""
        allowEsc
        allowClickAway
        notification
        notificationSound/>
    
   
    </div>
  );
}

export default App;

