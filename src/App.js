import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Activity from './component/Activity/Activity';
import Contact from './component/Contact/Contact';
import Home from './component/home/home';
import Navbar from './component/navbar/navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact us' element={<Contact/>}/>
        <Route path='/Activities' element={<Activity/>}/>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

