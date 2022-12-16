import React from 'react'
import {NavLink} from 'react-router-dom';
function Linkhome() {
  return (
    <div>
      <div className='linkHome'>
        <ul>
            <li>
                <NavLink to='/contact/ravi' >ravi</NavLink>
            </li>
            <li>
                <NavLink to='/contact/sunny' >sunny</NavLink>
            </li>
            <li>
                <NavLink to='/contact/kundan' >kundan</NavLink>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Linkhome;
