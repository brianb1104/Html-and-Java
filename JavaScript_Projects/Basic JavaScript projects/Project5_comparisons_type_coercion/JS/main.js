function Operator() {
document.write(typeof "Word");//this is a qperator the variable is Word  
} 

function Test() {
    document.getElementById("Test").innerHTML = 0/0;//The result is NAN cause you cant divide a Zero into a zero
}

function Test2() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');//This will display True cause its a string not a number
}

function Test3() {
    document.getElementById("Test").innerHTML = isNaN('007'); //This result is False cause 007 is a number
}

function Not_infinte() {
    document.write(-3E310);// displays Negative infinte
}

 function Is_infinte() {
    document.write(2E310);//displays Infinte
}

function True() {
document.write(10 > 2);//displays True
}

function False() {
document.write(10 < 2);//displays False
}

function division() {
    var simple_Math = 10 / 5;
    document.getElementById("Test").innerHTML = "10 / 5 = " + simple_Math;// 10 divide by 5
    console.log(simple_Math);//shows Divided in console
}

  function Tring() {
  document.write("10" + 5); //displays 105
}

  function Logic() {
    var simple_Math = 10 < 5;
    document.getElementById("Test").innerHTML = "10 < 5 = " + simple_Math;
    console.log(10 < 5);// display False in console
}
  function Truth() {
  document.write(10 == 10);//display True
}
  function Lie() {
  document.write(3 == 11);// displays False
}
  function Triple() {
  A = "Magnus";
  B = "Magnus";
  document.write(A === B);//displays True
}
function Triple2() {
  A = "magnus"
  B = magnus;
  document.write(A === B);//displays False
}
function triple_N() {
  X = 82;
  Y = "82";
  document.write(X === Y);// displays False
}

function triple_Y() {
  S = 82;
  T = 82;
  document.write(S === T);//displays True
}

function two_A() {
  document.write(5 > 2 && 10 > 4);//displays True
}

function two_B() {
  document.write(2 > 5 && 10 > 4);//displays False
}

function straight_L() {
  document.write(10 > 15 || 10 > 4);// displays True
}
function straight_L2() {
  document.write(5 > 20 || 10 > 4);//displays False
}

  function not_Function() {
      document.getElementById("Test").innerHTML = !(20 > 10);// display False
}

  function it_Function() {
      document.getElementById("Test").innerHTML = !(5 > 10);//displays True
}