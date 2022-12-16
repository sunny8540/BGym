import React, { useState } from 'react'

function ContactAccordium() {
    const [set,setData]=useState(null);
function toggle(i){
    setData(i);
    if(set==i){
        return setData(null);
    }

}
    return (
    <div>
      <span className='Fq'>F/Q</span>
      <div  className='contactA'>
        <div className="contactB">
            {a.map((item,i)=>{
                return(
                    <>
                        <div className='question' onClick={()=> toggle(i)}>
                            <div className='questionA'>{item.question}</div>
                            <div className='sign'>{set==i ? '+' : '-'}</div>
                        </div>
                        <div className={set==i? "show":"answer"}>{item.answer}</div>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default ContactAccordium;

let a=[
    {
        question:"Timing",
        answer:"timimg will be 5AM to 10PM Every day",
    },
    {
        question:"Fee",
        answer:"Depend upon your course fee are varing",
    },
    {
        question:"Trainer",
        answer:"In our gym trainer have big role",
    },
]