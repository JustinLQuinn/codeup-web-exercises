"use strict";
alert("Welcome to my Website!")

let userInput = prompt('What is your Favorite color?');
console.log('The user entered: ' + userInput);
alert("Great, "+userInput+" is also my favorite color.")

var littleMermaid = prompt('How long are you renting The Little Mermaid?');
var brotherBear = prompt( 'How long are you renting Brother Bear?');
var Hercules = prompt('How long are you renting Hercules?');
var Total = (littleMermaid * 3)+(brotherBear * 3)+(Hercules * 3)
alert( "Your total comes out to $" + Total)

var Google = prompt('Google hours this week?');
var Amazon = prompt( 'Amazon hours this week?');
var faceBook = prompt('Facebook hours this week?');
var wages = (Google * 400)+(Amazon * 380)+(faceBook * 350);
alert( "Your total wages this week is $" + wages)

var inClass = confirm("Is this class still available?") && confirm("Do you have other classes at the same time?")
alert("Can you take this class? " + inClass)

var member = "Cody123";
var account = confirm('Does ' + member+' have a Premium account?');
var inboxItems = 4;
var Cart = inboxItems >= 2;
var Date = prompt("Todays Date: ");
var goodDate = Date <= 10-30-2025;
var coupounGood = ((account || Cart) && goodDate);
alert('Coupoun good: '+coupounGood)

//completed assignment for class



