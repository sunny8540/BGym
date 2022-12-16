import React from 'react';
import './index.css';

function HomeS(props) {
  return (
    <div>
      <div className='smain'>
        <div className='cmain'>
            <div className='imain'><img src={props.img} alt="" /></div>
            <div className='nmain'>{props.no}</div>
            <div className='namemain'>{props.nmain}</div>
            <div className='dmain'>{props.dmain}</div>
            <div className='amain'><a href={props.anc}>Read More</a></div>
        </div>
      </div>
    </div>
  )
}

export default HomeS;
