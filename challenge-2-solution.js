'use strict'





let userInputfirst=prompt('provide first number');
let userInputsecond=prompt('provide second number');
let userInputthird=prompt('provide third number');
let userInputfourth=prompt('provide fourth number');
let userInputfifth=prompt('provide fifth number');

if(userInputfirst < userInputsecond || userInputsecond<userInputthird || userInputthird<userInputfourth || userInputfifth< userInputfirst){
  alert ('your minNUmber is'+userInputfirst + 'your max number is'+userInputfifth);
}