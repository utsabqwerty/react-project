import { useState } from 'react';
import '../styles/navbar.css'
import Custombutton from './Custom-button';
function Navbar()
{
   var [count, setCount] = useState(0);
    return(
        <div id="navbar">
         <div id="Logo">LOGO</div>
         <div id="Menu">
            <p className="menu-item">Home</p>
            <p className="menu-item">Services</p>
            <p className="menu-item">About Us</p>
            <p className="menu-item">Contact</p>
            <p className='menu-item'>{count}</p>
         </div>
         
         <Custombutton title="Login" onpressed={()=>{
            setCount((prevState)=>prevState + 1)
         }}/>
    </div>
    );
    
}
export default Navbar