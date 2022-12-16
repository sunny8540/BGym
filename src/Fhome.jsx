import React from 'react'

function Fhome(props) {
  return (
    <div>
      <div className='fmain'>
        <div className='fimg'>
            <img src={props.img} alt="1" />
        </div>
        <div className='fcmain'>{props.fcmain}</div>
        <div className='fcimg'><img src="https://th.bing.com/th/id/OIP.cJR_NRHCSU-9b4YrOXqW0gHaHL?w=201&h=194&c=7&r=0&o=5&pid=1.7" alt="" />{props.fcname}</div>
        <div className='ftime'>
            <div className='fday'>{props.fday}</div>
            <div className='ftimeing'>{props.ftimeing}</div>
        </div>
      </div>

    </div>
  )
}

export default Fhome;
