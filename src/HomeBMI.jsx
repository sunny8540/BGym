import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './index.css';

function HomeBMI() {
    const [ft,setFt]=useState("");
    const [inch,setInch]=useState("");
    const [weight,setWeight]=useState("");
    const [result,setResult]=useState("");

function post(event){
    let a=event.target.value;
setFt(a);

console.log(a);
    } 
    function post1(event){
        let b=event.target.value;
        setInch(b);
        console.log(b);
    }
    function post2(event){
        let c=event.target.value;
        setWeight(c);
        console.log(c);
    }

    function set(){
        let resft=ft*0.3048;
        let resin=inch*0.0254;
        let height=resft+resin;
        let result=((weight)/(height*height));
        setResult(result);
    }
    function clear(){
        setFt(" ");
    }

 return (
    <div>
    <div className='bmi'>
   <div className='bmi-left'>
   <span className='bmi-1'>Calculate Your BMI</span>
      <div className='bmi-2'>Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m 2, resulting from mass in kilograms and height in metres.</div>
      <div className='bmi-input'>MEN<input type="checkbox" /> WOMEN<input type="checkbox" />OTHER <input type="checkbox" /></div>
        <p>HEIGHT</p>
        <div className='bmi-in'>
            <input type="number"  onChange={post} placeholder='FT'/><input type="number" onChange={post1} placeholder='IN'/>
        
        </div>
            <p>WEIGHT</p>
            <div className='bmi1-in'>
                <input type="number" onChange={post2} placeholder='KG'/>
            </div>
            <p>RESULT</p>
            <div className='bmi1-in1'>
                <div className='result'>{result}</div>
            </div>
           <div className='lows'>
           <div className='bmi-cal' onClick={set}>
                <p>Calculate</p>
            </div>
            <div className='bmi-cal1' onClick={clear}>
                <p>Clear</p>
            </div>
           </div>
   </div>
   <div className='bmi-right'>
    <table>
        <tr>
            <th>BMI</th>
            <th>WEIGHT STATUS</th>
        </tr>
        <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
        </tr>
        <tr>
            <td>18.5-24.9</td>
            <td>Healty</td>
        </tr>
        <tr>
            <td>25.0--29.0</td>
            <td>Overweight</td>
        </tr>
        <tr>
            <td>30.0 and above</td>
            <td>Obese</td>
        </tr>
    </table>
   </div>
    </div>
       </div>
  )
}

export default HomeBMI;
