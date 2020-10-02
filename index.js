import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// import Para from "./Para";

// import Heading from './Heading';


// ReactDOM.render(
//   <>
//   <div>
//   <Heading/>
//   <Para/>

//   </div>
//   </>,
//   document.getElementById("root")

// );


// this is for the change the greetings


let currentDate  =new Date();
currentDate  =currentDate.getHours();
let greetings="";
 

const cssStyle={};


if (currentDate <=1 && currentDate <12){
  greetings="good morning";
  cssStyle.color="green";
  
} else if(currentDate >=12 && currentDate <=19 ) {
  greetings="good afternoon";
  cssStyle.color="Orange";
}else {
  greetings="goodnight";
  cssStyle.color="black";
}

ReactDOM.render(
  <>
  <div>
<h1>hi sai <span style={cssStyle}> {greetings}</span></h1>
</div>
</>,
document.getElementById('root')
); 