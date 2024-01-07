
'use strict'
// const buttons = document.getElementsByClassName("btn");

// const flexBlock = document.querySelector(".flex-block-container");
// console.log(flexBlock)

// const cribFlex = ({target: {dataset: {flex}}, target}) => 
//     // {target.parentElement.style.flexDirection = flex;};
//     {flexBlock.style.flexDirection = flex;}
//     //console.log(cribFlex)

// for (let btn of buttons) {
//   btn.addEventListener("click", cribFlex); 
// }
 
// console.log(cribFlex);
 
const buttons = document.querySelectorAll(".btn");

const flexBlock = document.querySelector(".flex-block-container");


const cribFlex = ({target: {dataset: {flex}}, target}) => 
    // {target.parentElement.style.flexDirection = flex;};
    {flexBlock.style.flexDirection = flex;}
    //console.log(cribFlex)

for (let btn of buttons) {
  btn.addEventListener("click", cribFlex);
}