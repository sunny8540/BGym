import React, {useState, useEffect } from 'react'
import Links from './Links';
import Link from './Link';
import back2 from './Back2'; 
import Footer from './Footer';
function Back() {
    const [back1,setBack]=useState([]);
    async function back(){
  
    
        let resp=await  fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',  {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '12d7aecbdcmshf68dd55db3022fap10c103jsn4278a783a1a3',
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
          });
          let data=await resp.json();
          console.log(data);
          setBack(data);
              
       }
       useEffect(()=>{
        back();
       },[]);
  return (
    <div>
    <Links/>
    <div className='linkAll'>
    <div className='linkLeft'>
    <Link/>

    </div>
      {/* <h1>Back Exercise</h1> */}
      <div className='main'>
      {
                        back2.map(item=>{
                            return(
                                <>
                                   <div className='main1'>
                                   <div className='equ'>
                                   {/* <div className='bodyPart'>Exercise name: {item.bodyPart}</div> */}
                                   <div className='equipment'> {item.equipment}</div>
                                   </div>
                                    <div className='img'><img src={item.gifUrl} alt="pic" /></div>
                                    <div className='name'> {item.name}</div>
                                    <div className='target'>{item.target}</div>
                                   </div>
                                </>
                            )
                        })
                    }
      </div>
    </div>
    <div className='footerfac'> <Footer /></div>

    </div>
  )
}

export default Back;
