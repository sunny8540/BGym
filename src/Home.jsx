import React, { useEffect, useState } from 'react'
import Link from './Link';
import B from './B';
import Links from './Links';
import './index.css';
import HomeS from './HomeS';
import Homep from './Homep';
import Fhome from './Fhome';
import HomeBMI from './HomeBMI';
import Footer from './Footer';
function Home() {
    const [part,setPart]=useState([]);
    const [back1,setBack]=useState([]);



   
    
  async function parts(){
        let res=await   fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',  {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '12d7aecbdcmshf68dd55db3022fap10c103jsn4278a783a1a3',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        });
        var dataPart=await res.json();
        console.log(dataPart);
        setPart(dataPart);
            
          
  }

  useEffect(()=>{
    parts();
  },[]);
  function getPart(){
    console.log();
  }
         
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

  return (

      <div>
      <div className='linkMain'>
        <Links />
      </div>
     <div className='linkAll'>
     <div className='linkLeft'>
      <Link/>
      </div>
<div className='main3'>
 <div className='imgs'>
    <div className='img1'><img src=' https://mcdn.wallpapersafari.com/medium/71/0/KUmtY1.jpg' alt="pic1" /></div>
    <div className='text1'><p>No Pain<br/><span className='bil'>No Gain</span></p></div>
 <div className='text2'>
  <span className='shape'>SHAPE </span><span className='your'>your</span> <br/><span className='body'>BODY</span>
  <div className='text3'>A good quality health or fitness centre provides<br/>a sale environment for exercise and is suppervised<br/>by trained person</div>
 <div className='text4'>
 <div className='one'>
 <div className='fifty'>50+</div>
  <div className='exp'>experts coaches</div>
 </div>


 <div className='one'>
 <div className='fifty'>4.5+</div>
  <div className='exp'>Average clients platform<br/>specialists rating</div>
 </div>
 <div className='one'>
 <div className='fifty'>10+</div>
  <div className='exp'>Different suit body<br/>building course.</div>
 </div>
 <div className='one'>
 <div className='fifty'>20+</div>
  <div className='exp'>experts body builder mentor</div>
 </div>
  </div>
 </div>
 <div className='containt'>
 <div className='containt1'>Our Services</div>
 <div className='containt2'>Welcome to our gym & fitness training center.sore today,<br/>strong tomorrow.impprove your fitness today.</div>
 </div>
 <div className='ser'>
 <HomeS
img="https://th.bing.com/th/id/OIP.RAsV7vVXWh0Nzta7tWM_MwHaGv?w=199&h=181&c=7&r=0&o=5&pid=1.7"
  no="01"
  nmain="Strenth Training"
  dmain="We are give best quility health care meachine & facility of exercoses."
  anc="strenthtraining"
 />
 <HomeS
img="https://th.bing.com/th/id/OIP.RAsV7vVXWh0Nzta7tWM_MwHaGv?w=199&h=181&c=7&r=0&o=5&pid=1.7"
  no="02"
  nmain="Lose Extra Weight"
  dmain="We are give best quility health care machine & facility of exercoses."
  anc="loseweight"
 />
 <HomeS
img="https://th.bing.com/th/id/OIP.RAsV7vVXWh0Nzta7tWM_MwHaGv?w=199&h=181&c=7&r=0&o=5&pid=1.7"
  no="03"
  nmain="Cardio & Strength"
  dmain="We are give best quility health care meachine & facility of exercoses."
  anc="cardio&Strength"
 />
 <HomeS
img="https://th.bing.com/th/id/OIP.RAsV7vVXWh0Nzta7tWM_MwHaGv?w=199&h=181&c=7&r=0&o=5&pid=1.7"
  no="04"
  nmain="Gym Enthusuasts"
  dmain="We are give best quility health care meachine & facility of exercoses."
  anc="gym&enthusiasts"
 />
 </div>
 <div className='fnames'>Featured Classes</div>
 <div className='feature'>

  <Fhome
  img="https://th.bing.com/th/id/OIP.e_2eL2hA5eFC2PEPQ0ehlAHaE7?w=265&h=180&c=7&r=0&o=5&pid=1.7"
  fcmain="Cycling"
  fcname="David Warner,Aron Finch"
  fday="FRI"
  ftimeing="3:00PM"
   />


<Fhome
  img=" data:image/jpeg;base64,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"
  fcmain="Martial Arts"
  fcname="Ravi Kumar"
  fday="MON"
  ftimeing="4:00AM"
   />

<Fhome
  // img=" "
  img=" https://th.bing.com/th/id/OIP.3q1dX4C2k0rIjEUsJKMPAAHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7"
  fcmain="Running"
  fcname="Sunny Raj,kumar ravi"
  fday="MON"
  ftimeing="3:00AM"
   />
 </div>
 </div>
 <div className='plan'>
  <div className='planc'>Choose Our Plan</div>
  <div className='plancb'>Welcome to our gym & fitness center.sore today,<br/>strong tomorrow.Improve your fitness today</div>
 </div>

 <div className='planmain'>
  <div className='planleft'>
    <div className='planmonth'><p>Monthly</p></div>
    <div className='pone'>2 hours personal training <span className='check'>
    <input type="checkbox" /></span>  
  </div>



  <div className='pone'>Free consulting <span className='check'>
    <input type="checkbox" /></span>  
  </div>


  <div className='pone'>Exercise program <span className='check'>
    <input type="checkbox" /></span>  
  </div>


  <div className='pone'>Nutrition plan<span className='check'>
    <input type="checkbox" /></span>  
  </div>




  <div className='pone'>Extra workout session<span className='check'>
    <input type="checkbox" /></span>  
  </div>
 </div>
  <div className='planright'></div>
 
 <div className='planm'>
<Homep
  homeps="Starter"
  homepm="save 57%"
  homeprupee="$19"
/>
<Homep
  homeps="Silver"
  homepm="save 75%"
  homeprupee="$30"
/>
<Homep
  homeps="Gold"
  homepm="save 58%"
  homeprupee="$50"
/>
<Homep
  homeps="Platinum"
  homepm="save 90%"
  homeprupee="$100"
/>
 <div className='submit'><p>Submit</p></div>
 </div>
 </div>
 <hr/>
<HomeBMI />
</div>
     </div>
<Footer />

    </div>
  )
}

export default Home;
