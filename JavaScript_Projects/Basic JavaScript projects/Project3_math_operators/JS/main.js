function addition_Function() {
  var Math = 4 + 4;
  document.getElementById("Math").innerHTML = "4 + 4 = " + addition;// addition 4 + 4
} 

function subtraction_Function() {
  var Subtraction = 7 - 3;
  document.getElementById("Math").innerHTML = "7 - 3 =" + Subtraction;// subtraction 7 - 3
}

function multiplication() {
  var simple_Math = 7 * 8;
  document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;//multiply 6 x 8
}

function division() {
  var simple_Math = 10 / 5;
  document.getElementById("Math").innerHTML = "10 / 5 = " + simple_Math;// 10 divide by 5
}

function more_Math() {
  var simple_Math = (3 + 3) * 2 / 2 -4;// series of addition, multiply, divide and subtract
  document.getElementById("Math").innerHTML "3 plus 3, multiplied by 2 divided in half and then subtracted by 4 equals " + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 8 % 4;//divide 8 into 4
  document.getElementById("Math").innerHTML = "When you divide 8 by 4 you have a remainder of: " + simple_Math;
}

function negation_Operation() {
  var x = 90;// negation operator out is -90
  document.getElementById("Math").innerHTML = -x;
}

function increment_Operation() {
var y = 12;
x++;// increment from 12 to 13
document.write(y);
}

function decrement_Operation() {
var x = 6.5;
 y--;//decrement from 6.5 to 5.5
 document.write(x);
}

function random_Operation() {
window.alert(Math.random());// returns a random number between 0 and 1
}

function random2_Operation() {
window.alert(Math.random() * 100);// returns a number between 0 and 100
}

function pow_Operation() {
Math.pow(8, 2); // returns 64
}