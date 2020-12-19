function OPerator() {
document.write(typeof "Word");//this is a qperator the variable is Word
}

function Test() {
    document.getElementById("Test").innerHTML = 0/0;//The result is NAN cause you cant divide a Zero into a zero
}

function Test() {
    document.getElementById("my_Function").innerHTML = isNaN('This is a string');//This will display True cause its a string not a number
}

function Test() {
    document.getElementById("Test_2").innerHTML = isNaN('007'); //This result is False cause 007 is a number
}

function Negative_Infinte {// displays Negative infinte
    document.write(-3E310);
}

function Infinte {
    document.write(2E310);//displays Infinte
}

document.write(10 > 2);//displays True

document.write(10 < 2);//displays False

function division() {
    var simple_Math = 10 / 5;
    document.getElementById("Math").innerHTML = "10 / 5 = " + simple_Math;// 10 divide by 5
    console.log(10 / 5);//shows Divided in console
  }

  document.write("10" + 5); //displays 105

  function Logic() {
    var simple_Math = 10 < 5;
    document.getElementById("Math").innerHTML = "10 < 5 = " + simple_Math;
    console.log(10 < 5);// display False in console
  }

  document.write(10 == 10);//display True

  document.write(3 == 11);// displays False

  A = "Magnus";
  B = "Magnus";
  document.write(A === B);//displays True

  C = "Magnus"
  D = Magnus;
  document.write(C === D);//displays False

  X = 82;
  Y = "82";
  document.write(X === Y);// displays False

  S = 82;
  T = 82;
  document.write(S === T);//displays True

  document.write(5 > 2 && 10 > 4);//displays True

  document.write(2 > 5 && 10 > 4);//displays False

  document.write(10 > 15 || 10 > 4);// displays True

  document.write(5 > 20 || 10 > 4);//displays False