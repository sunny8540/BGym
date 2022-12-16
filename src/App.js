import React from 'react'
import {HashRouter ,Route, Routes} from 'react-router-dom';
import Home from './Home';
import Back from './Back';
import Waist from './Waist';
import Cardio from './Cardio';
import Chest from './Chest';
import Contact from './Contact';
import LowerArm from './LowerArm';
import LowerLeg from './LowerLeg';
import Neck from './Neck';
import Shoulder from './Shoulder';
import UpperArm from './UpperArm';
import UpperLeg from './UpperLeg';
import Faclities from './Faclities';
import Error from './Error';
function App() {
  return (
     <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/faclities" element={<Faclities/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/back" element={<Back/>} />
         <Route path="/cardio" element={<Cardio/>} />
            <Route path="/chest" element={<Chest/>} />
          <Route path="/lowerArm" element={<LowerArm/>} />
        <Route path="/lowerLeg" element={<LowerLeg/>} />
          <Route path="/neck" element={<Neck/>} />
          <Route path="/shoulder" element={<Shoulder/>} />
          <Route path="/upperArm" element={<UpperArm/>} />
          <Route path="/upperLeg" element={<UpperLeg/>} />
          <Route path="/waist" element={<Waist/>} /> 
          <Route path="*" element={<Error/>}/>

           
        </Routes>
      </HashRouter>
     </>
  )
}

export default App;
