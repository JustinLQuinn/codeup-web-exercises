"use strict";

//1st loop item#2
// let user = Number(prompt ("Please enter a Odd number from 1-50:"));

// let oddNumberCheck = (numberActual % 2 === 0);
// let range = (numberActual>0 && numberActual<51);
let user = Number(prompt("Please enter a Odd number from 1-50:"));

while ( true) {
//if num IS odd, then break
    if (user % 2 !== 0) {
        break;
    }
    alert("You have entered in a wrong variable value. Please try again.");
    user = Number(prompt("Please enter a Odd number from 1-50:"));
}
//second loop
for (let i = 0; i < 50; i++){
    if (user % 2 === 0) {
        break;
    }
    if (i === user){
        console.log("skipping " + i);
        continue
    }
    console.log(i);
}

 // for (let i = 1; i < 100; i++) {
 //     console.log();
 // }

//2nd loop

