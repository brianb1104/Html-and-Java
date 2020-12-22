var X = 10;
function Add_numbers_1() {//Global variable
    document.write(20 + X +"</br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Local_1() {//local variable
    var y = 20;
    document.write(20 + y +"</br>");
}
function Local_2() {
    document.write(y + 100);
}
Local_1();
Local_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Year() {
    if (new Date().getFullYear() < 1999) {
        document.getElementById("Party").innerHTML = "No matter what year it is, party like it's 1999.";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").nodeValue;
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
    else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }

else if (Time > 12 == Time < 18) {
    Reply = "It is the afternoon.";
}
else  {
    Reply = "It is evening time.";
}
document.getElementById("Time_of_day").innerHTML = Reply;
}