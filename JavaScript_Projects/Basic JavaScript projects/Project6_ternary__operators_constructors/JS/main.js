function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
    console.log(Erik);
}

function Television(Make, Model, Year, Class ) {
    this.Television_Make = Make;
    this.Television_Model = Model;
    this.Television_Year = Year;
    this.Television_Class = Class;
}
var Jack = new Television("Sony", "A8H", 2020, "OLed");
var Emily = new Television("Samsung", "Q90T", 2019, "4K");
var Justin = new Television("Zenith", "Silver_Finger", 1971, "Color");
function Tube() {
    document.getElementById("New_and_This").innerHTML =
    "Justin watches a " + Justin.Television_Make + "color " + Justin.Television_Model +
    " manufactured in " + Justin.Television_Year;
}

function abstract(first, last, age, eye) {//
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  function count_Function() {
      document.getElementById("Nested_Function").innerHTML = Count();
      function Count() {
          var Starting_point = 9;
          function Plus_one() {Starting_point += 1;}
          Plus_one();
          return Starting_point;
      }
  }