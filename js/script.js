// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// first we get the HTML for the button

// program to generate fibonacci series up to n terms
function calculate() 
{
  // take input from the user
  const number = parseInt(document.getElementById('number').value)
  let number1 = 0, number2 = 1, nextTerm

  for (let counter = 1; counter <= number; counter++) 
  {
  
    nextTerm = number1 + number2
    number1 = number2
    number2 = nextTerm
    //console.log(number1)
    document.getElementById('answer').innerHTML = 'The answer is ' + number1
  }
}  

