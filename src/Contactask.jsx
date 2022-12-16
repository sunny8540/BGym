import React, { useState } from 'react'
import './index.css';
function Contactask() {
    const [data,setData]=useState({
        name:'',
        email:'',
        title:'',
        message:'',
    });
    function post(event){
        let name=event.target.name;
        let value=event.target.value;
        setData({...data,[name]:value})
    }
    function posts(){
        const {name,title,email,message}=data;
        const res=fetch('https://gymwebsite-e6c69-default-rtdb.firebaseio.com/userRecord.json',{
            method:"POST",
            header:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,email,title,message
            })
        });
        if( setData({
            name:'',
            email:'',
            title:'',
            message:''
        })){
             alert('plz enter your name,email,title,message')
        } 
        if(res){
            setData({
                name:'',
                email:'',
                title:'',
                message:''
            });
            alert("thank you your message is submited");

        }

    }
  return (
    <div>
      <div className='contactask'>
        <p1>message us</p1>
        <input type="text"
        name="name"
        value={data.name}
        onChange={post}  
        placeholder="Name"/>
        <input type="text"
        name="email"
        value={data.email}
        onChange={post} 
        placeholder="email address"/>
        <input type="text"
        name="title"
        value={data.title}
        onChange={post} 
        placeholder="title"/>
        <input type="text"
        name="message"
        value={data.message}
        onChange={post}
        placeholder="Message"/>
      <div className='butpost' onClick={posts}>click here</div>
      </div>
    </div>
  )
}

export default Contactask;
