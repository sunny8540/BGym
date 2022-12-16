import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import './index.css';
function Link() {
    const [tog,setTog]=useState("");
    function toggles(){
        let i=true;
        return setTog(i)
    }
  return (
    <div>
    {/* <button onClick={toggles()}></button> */}
    <h6>List of all exercise</h6>
      <div className='link'>
    <hr/>   
        <ul>
           
            
            <li>
                <NavLink to='/back'>back</NavLink>
            </li>
            <li>
                <NavLink to='/cardio'>cardio</NavLink>
            </li>


            <li>
                <NavLink to='/chest'>chest</NavLink>
            </li>
            <li>
                <NavLink to='/lowerArm'>lowerArm</NavLink>
            </li>
            <li>
                <NavLink to='/lowerLeg'>lowerLeg</NavLink>
            </li>


            <li>
                <NavLink to='/neck'>neck</NavLink>
            </li>
            <li>
                <NavLink to='/shoulder'>shoulder</NavLink>
            </li>
            <li>
                <NavLink to='/upperArm'>upperArm</NavLink>
            </li>

            <li>
                <NavLink to='/upperLeg'>upperLeg</NavLink>
            </li>
            <li>
                <NavLink to='/waist'>waist</NavLink>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Link;
