import React, { useMemo, useState } from 'react'
import './Calculate.css'
// import Slider from './../Slider';
// import { viteLogo } from '/vite.svg';

function CalculaterEmi() {
let [amount,setamount]=useState(0);
let[year,setyear]=useState(1);
let[percentage,setpercentage]=useState(1);
// total();
// console.log(totalpay)

let per=()=>{
  if(percentage>=0&&percentage<=19.5){
    setpercentage(percentage=percentage+1/2);
      // console.log(a)
  }else setpercentage(0);
}
let ragging=()=>{
  if(year>=1&&year<30){
     setyear(year=year+1); 
  }
  else{
    setyear(1);
  }
}
// console.log(year);
let settingamount=()=>{
  if(amount>=0&&amount<10000000){
    setamount(amount=amount+100000);
    // setamount(value);
 }
 else{
   setamount(0);
 }
   
}
// console.log(amount)
  let take=()=>{
     setamount(100000)
  }
  let take2=()=>{
    setamount(3000000)
 }
 let take3=()=>{
  setamount(15000000)
}
let perb=percentage/12;
let perb2=perb/100;
let find=Math.pow(1+perb2,year*12);
let find2=Math.pow(1+perb2,year*12);
let find1=find.toFixed(4);
let find22=find2.toFixed(4);
let am=amount*perb2;
// console.log(am);
// console.log(find11,"uuuu")
let reduce=am*find1;
let re=reduce*find1;
let min=find22-1;
// console.log(min)
let max=reduce/min;
max=Math.floor(max)
console.log(max)
// let raw=amount
let interest=amount?Math.floor(amount/184):0
// interest=percentage?percentage*543:0;
// let interest=interest1();
console.log(interest)
let totalpaying=amount+interest
// console.log(re)
// console.log(reduce)
// console.log(find1)
// console.log(find2)
// console.log(perb2)
  return (
    <div className='calculator'>
      <div className='rangebox'>
      <div className='heading'>
        <h4>Select the loan amount range</h4>
      </div>
      <div className='ranging'>
        <div className='inputboxone'>
      <input type="radio" id='zerotoone' value="0 - 1Crore" name='choose' onClick={take} /> <label htmlFor="">0 - 1Crore</label>
        </div>
        <div className='inputboxtwo'>
        <input type="radio" id='onetofive' value="1Crore - 5Crore" name='choose' onClick={take2}/> <label htmlFor="">1Crore - 5Crore</label>
         </div>
         <div className='inputbox'>
         <input type="radio" id='fiveto' value="5Crore - 30Crore" name='choose'onClick={take3} /> <label htmlFor="">5Crore - 30Crore</label>
         </div>
      </div>
      
      <div className='loanamount'>
        <div className='text'>
        <h5>Loan Amount</h5>
        </div>
        <div className='amountbox'>
          <span>₹</span>  <input type="number" value={amount}  min="0" max="1000000" />
        </div>
      </div>

      <div className='selectingrange'>
       <input type="range" class="accent"  onChange={settingamount} min="0" max="1000000" />
      </div>
      <div className='settingamount'>
       <div className='sett'>
        <h5>5cr</h5>
       </div>
       <div className='sett'>
        <h5>10cr</h5>
       </div>
       <div className='sett'>
        <h5>15cr</h5>
       </div>
       <div className='sett'>
        <h5>20cr</h5>
       </div>
       <div className='sett'>
        <h5>25cr</h5>
       </div>
      </div>
      <div className='text2'>
        <h5>Illustrative <a href="#">Interest Rate</a> p.a.</h5>
        </div>
        <div className='percentagebox'>
          <input type="number" value={percentage} /><span>%</span>
        </div>
        <div className='selectingrange2'>
       <input type="range" class="accent" onChange={per} min="1" max="20"/>
      </div>
      <div className='settingamount'>
       <div className='sett'>
        <h5>1%</h5>
       </div>
       <div className='sett'>
        <h5>5%</h5>
       </div>
       <div className='sett'>
        <h5>10%</h5>
       </div>
       <div className='sett'>
        <h5>15%</h5>
       </div>
       <div className='sett'>
        <h5>20%</h5>
       </div>
      </div>
      <div className='text2'>
        <h5>TenureMonth <input type="checkbox" checked/>
        <span class="slider round"></span> Years</h5>
        </div>
        <div className='amountbox2'>
            <input type="number" value={year} />
        </div>
        <div className='selectingrange3'>
       <input type="range" onChange={ragging} class="accent"  min="1" max="30"  />
      </div>
      <div className='diving'>
        <div className='divingtext'>
          <h5>1 year</h5>
        </div>
        <div className='divingtext'>
          <h5>30 year</h5>
        </div>
      </div>
      </div>
      <div className='totalratebox'>
         <div className='ratebox'>  
            
              <div className='firstbox'>
               <div className='boxtext'>
                 <h5 >Principal amount</h5>
                  </div>
                  <div className='inputboxrate'>
              <span>₹</span>  <input type="Number" value={amount}  />
                  </div>
              </div>
              <div className='secondbox'>
               <div className='boxtext2'>
                 <h5 >Interest amount</h5>
                  </div>
                  <div className='inputboxrate2'>
              <span>₹</span>  <input type="Number" onChange={interest} value={interest}  />
                  </div>
              </div>
              <div className='thirdbox'>
               <div className='boxtext3'>
                 <h5 >Total amount payable</h5>
                  </div>
                  <div className='inputboxrate3'>
              <span>₹</span>  <input type="Number" value={totalpaying} />
                  </div>
              </div>
              <div className='lastbefore'>
               <h6 style={{display:"inline",fontWeight:"400"}}>Your Monthly Emi</h6> <span style={{fontSize:"35px",fontWeight:"bolder",marginTop:"-10px"}}>₹</span><input type="Number" value={max}  />
              </div>
              <br />
              <div className='btn'>
                <button type='submit'>Apply For Home Loan</button>
              </div>
         </div>
      </div>
    </div>
  )
}

export default CalculaterEmi
// value={Math.floor(((amount*finalrating)*Math.pow(1+finalrating),year*12)/Math.pow((1+finalrating),(year*12-1)))}