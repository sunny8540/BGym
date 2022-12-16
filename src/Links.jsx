import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

function Links() {
  return (
    <div>
   <div className='header'>
   <div className='img'>
<a href="#">
      <img className='image' src="https://th.bing.com/th/id/OIP.Ywb44WZRuUMlTNR3uoRw7AHaE7?w=254&h=180&c=7&r=0&o=5&pid=1.7" alt="" />

</a>
      </div>
        <div className='link1'>
          <ul>
            <li>
  
            <NavLink className='headerLinks'  to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink className='headerLinks' to='/faclities'>Facilities</NavLink>
  
            </li>
            <li>
            <NavLink className='headerLinks' to='/contact'>Contact</NavLink>
     
            </li>
          </ul>
        </div>
     
   </div>
       </div>
  )
}

export default Links;
