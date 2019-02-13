"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jose Felix
   Date:   2.12.19

*/
// You need to take out the new date so that it changes it to the regular date.
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
// change the variable for this id to make it timeStr
document.getElementById("timeStamp").innerHTML = timeStr;
// THis is how we get the date and time from the other variable "thisTime" variable.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = ((2 * thisMonth + thisHour) % 24 );
// mapNum and the addition signs change the number that happens based on what the calculations above it were.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
// this needs to have afterbegin in there as a part of the syntax
document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);