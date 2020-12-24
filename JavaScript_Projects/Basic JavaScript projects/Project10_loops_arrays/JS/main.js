function my_Function() {
var str = "Michael Jackson";
var n = str.length;
document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function Call_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Loop").innerHTML = Content
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] ="sleeping";
    Cat_Picture[1] ="playing";
    Cat_Picture[2] ="eating";
    Cat_Picture[3] ="purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function the_R() {
    return Math.PI;
  }
  
  document.getElementById("demo").innerHTML = the_R();

  let car = {
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "red ",
      description : function() {
          return "The car is a " + this.year + this.color + this.model;
      }
  };
  document.getElementById("Car_Object").innerHTML = car.description();

  var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
