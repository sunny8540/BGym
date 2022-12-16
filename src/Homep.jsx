import React from 'react';
import './index.css';

function Homep(props) {
  return (
    <div>
      <div className='homep'>
        <div className='homep-1'><input className='inputp' type="checkbox" /></div>
        <div className='homep-2'>
            <div className='homep-2-1'>{props.homeps}
</div>
            <div className='homep-2-2'><p>{props.homepm}</p></div>
        </div>
        <div className='homep-3'><span className='homep-rupee'><p>{props.homeprupee}</p></span> <span className='homep-month'><p>/Month</p></span></div>
      </div>
    </div>
  )
}

export default Homep;
