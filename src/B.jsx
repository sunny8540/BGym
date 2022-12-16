import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Ravi from './Ravi';
import Sunny from './Sunny';
import Kundan from './Kundan';
function B() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='//ravi' element={<Ravi/>}/>
            <Route path='//kundan' element={<Kundan/>}/>
            <Route path='//sunny' element={<Sunny/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default B;
