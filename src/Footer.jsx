import React ,{useState}from 'react'
import './index.css';
function Footer() {
    
    const [set,setData]=useState({
        subscribe:'',
      });
      function get(event){
        let name=event.target.name;
        let value=event.target.value;
        setData({...set,[name]:value});
      }
      function post(){
        const {subscribe}=set;
        let res=fetch('https://gymwebsite-e6c69-default-rtdb.firebaseio.com/userRecord.json',{
          method:"POST",
          header:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            subscribe
          })
        });
        if( setData({
            subscribe:''        
      })){
           alert('plz enter your name,email,title,message')
      } 
      if(res){
          setData({
            subscribe:''        
  
          });
          alert("thank you your message is submited");
  
      }
      }
  
  return (
    <div>
      <div className='homefooter'>
  <div className='homefooterleft'>
    Subscribe Our Newsletter For Gym Update
   <div className='homesub'>
  <div className='sinput'> <input type="text" placeholder='enter your email here' name="subscribe"
    value={set.subscribe}
    onChange={get} /></div>
  <div className='sub' onClick={post}>Subscribe</div>
   </div>
    
  </div>
  <div className='homefooterright'>
  <div className='r1'>
  <h2>More</h2>
    <ul>
        <li><a href="#">Gym</a></li>
        <li><a href="#">Fitness</a></li>
        <li><a href="#">Gym tips</a></li>
        <li><a href="#">Yoga</a></li>
        <li><a href="#">Zumba</a></li>
    </ul>
  </div>
  <div className='r1'>
    <h2>Social</h2>
    <ul>
        <li><a href="https://www.facebook.com/profile.php?id=100053273199267">Facebook</a></li>
        <li><a href="https://twitter.com/sunny8540897814">Twitter</a></li>
        <li><a href="https://www.instagram.com/sunny_sharma8540/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/sunny-raj-7b9bb2243/">LinkedIn</a></li>
    </ul>
  </div>
  <div className='r1'>
    <h2>Contact</h2>
    <ul>
        <li><a href="#">Help/FAQ</a></li>
        <li><a href="#">Mobile Number</a></li>
        <li><a href="#">Press</a></li>
    </ul>
  </div>
  </div>
</div>
    </div>
  )
}

export default Footer;
