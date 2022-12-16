import React from 'react'
import Link from './Link';
import Links from './Links';
import './index.css';
import Footer from './Footer';
import Contactask from './Contactask';
import ContactAccordium from './ContactAccordium';
function Contact() {
  return (
    <div>
   <div className='linkMain'>
        <Links />
      </div>
     <div className='linkAll'>
     <div className='linkLeft'>
      <Link/>
      </div>
       <div className='mainc'>
      <div className='contactimg'>
      
        <img src="https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-Generic-Members_Performing_Kettlebell_Press?fmt=auto&h=545&w=1440&sm=c&qlt=default&$qlt$&$poi$" alt="" />
      <div className="contactus">contact us</div>
      <div className="contact-try">Try 3 days pass
    <a href="#">      <div className="contact-try-but">Try Here</div></a>
</div>
      <div className="contactwe">We are here to help you</div>
      
      </div>
       </div>
   
      <div className='contactlow1'>
      <div className='contactfirst'>
        <h3>Contact</h3>
        <p>Hello,User I am here to help you. This page is related to find me here below have some link of social media.Dear you can also contact me with my mobile number 91-8540897814,and also with my company official email sunnyrajbodhgaya13@gmail.com</p>
      <div className='contactlowsocialmedia'>
       <div className='socialmedia'>
       <a href="https://www.facebook.com/profile.php?id=100053273199267"> <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="" /></a>
       </div>
       <div className='socialmedia'>
        <a href="https://www.instagram.com/sunny_sharma8540/"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" /></a>
       </div>
       <div className='socialmedia'>
        <a href="https://twitter.com/sunny8540897814"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138168.png" alt="" /></a>
       </div>
      </div>
      </div>
      <div className='contactfirst'>
        <h3>Gym Hours</h3>
        <ul>
          <li>Mon:5am - 10pm</li>
          <li>Tue:5am - 10pm</li>
          <li>Wed:5am - 10pm</li>
          <li>Thu:5am - 10pm</li>
          <li>Fri:5am - 10pm</li>
          <li>Sat:6am - 10pm</li>
          <li>Sun:6am - 10pm</li>
        </ul>
      </div>
      <div className='contactfirst'>
        <h3>contact</h3>
        <div className='num'>91-8540897814</div>
        <div className='email'>sunnyrajbodhgaya13@gmail.com</div>
        <div className='add'>1234 DIVI st.san Francisco. CA 19512</div>
      </div>

      </div>
     </div>
<div className='footer3'>
  <div className='footer1left'>
<ContactAccordium />
  </div>
  <div className='footer1right'>
  <Contactask/>
  </div>
</div>
     <div className='footerfac'> <Footer /></div>
    </div>
  )
}

export default Contact;
