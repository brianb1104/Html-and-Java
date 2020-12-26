//This variable keeps track of who"s turn is it.
let activePlayer = "X";
//This array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

// this function is for placing a x or o in the square.
function PlaceXOro(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selectedSquare array to
    //see if it contains the square number clicked on.
if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //This variable retrieves the html element id that was clicked.
    let select = document.getElementById(squareNumber);
    //This condition checks who's turn it is.
    if (activePlayer === 'X') {
        //If activePlayer is equal to "X" the x.png is placed in Html.
        select.style.backgroundImage = "url('./img/x.png')";
        //Active player may only be 'X' or 'O' so, if not "X" it must be "O"
    } else {
        //if activePlayer is equal to 'O', the o.png is placed n HTML.
        select.style.backgroundImage = "url('./img/o.png')";
    }
    //squareNumber and activeplayer are concatenated together and added to array.
    selectedSquares.push(squareNumber + activePlayer);
    //This calls a function to check for  any win conditions.
    checkWinConditions();
    //This condition is for changing the active player.
    if (activePlayer === "X") {
        //If activePlayer is 'X' change it to 'O'.
        activePlayer ='O';
        //If activeplayer is anything other tha "X".
} else {
        //change the active player to "x".
        activePlayer = 'X';
}
    //This function plays placement sound.
    audio("./media/place.mp3");
    //This condition checks to see if it is computers turn.
    if(activePlayer === "O") {
        //This function disables clicking for computer choice.
        disableClick();
        //This function waits 1 second before placing the image
        //and enabling click.
        setTimeout( function () { computersTurn(); }, 1000);
    }
    //Returning true is needed for our computersTurn() function to work.
    return true;
}

//This function results in a square being selected.
function computersTurn() {
    //This boolean is needed for our while loop.
    let success = false;
    //This variable stores a random number ().
    let pickAsquare;
    //This condition allows our while loop to keep.
    //trying if a square is selected already.
    while(!success) {
        //A random number between 0 and 8  is selected.
        pickAsquare = String(Math.floor(Math.random() * 9));
        // if the random number evaluates returns true, trhe square hasn"t been selected yet.
        if (PlaceXOro(pickAsquare)) {
            //This line calls the function.
            PlaceXOro(pickAsquare);
            //this changes our boolean and ends the loop.
            success = true;
        };
    }
  }
}
//This function parses the selectedSquares array to search for win conditions.
//drawinline functiion is called to draw line if cindition is met.
function checkWinConditions() {
//X O, 1, 2 condition.
if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 550, 100);}
//X 3, 4, 5 condition.
else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 550, 304);}
//X 6, 7, 8 condition.
else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 550, 508);}
//X O, 3, 6 condition.
else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
//X 1, 4, 7 condition.
else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
//X 2, 5, 8 condition.
else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
//X 6, 4, 2 condition.
else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
//X O, 4, 8 condition.
else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
//X 0 O, 1, 2 condition.
else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
//X O 3, 4, 5 condition.
else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
//X O6, 7, 8 condition.
else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
//X O0, 3, 6 condition.
else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(304, 50, 304, 558);}
//X O1, 4, 7 condition.
else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(50, 100, 550, 100);}
//X O2, 5, 8 condition.
else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
//X O6, 4, 2 condition.
else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
//X O0, 4, 8 condition.
else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
//This condition checks for tie. If none of the above conditions register
//and 9 squares are selected, the code executes.
else if (selectedSquares.length >= 9) {
    //This function plays the tie game sound.
    audio('./media/tie.mp3');
    //This function sets a .3 second timer before the resetGame is called,
    setTimeout(function () { resetGame(); }, 1000);
}

//This function chcks if an array includes 3 strings.
//It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    //The next 3 variable will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all included in our array true is
    //returned and our else if condition executes the drawinLine function.
    if (a === true && b === true && c === true) { return true; }
  }
}

//this function makes our body element temporarily unclickable,
function disableClick() {
    //this makes our body unclickable.
    body.style.pointerEvents = "none";
    //this makes our body clickable again in one second.
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ("./media/place.mp3")
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //Play method play our audio sound.
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line acceses our html canvas element.
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas.
    const c =canvas.getContext('2d');
    //This line indicates where the start of a lines xaxis is.
    let x1 = coordX1,
    //This line indicates where the start of a lines y axis is.
    y1= coordY1,
    //This line indicates where the start of a lines x axis is.
    x2= coordX2,
    //This line indicates where the start of a lines x axis is.
    y2= coordY2,
    //This variable stores temporary x axis data we update in our animation loop.
    x= x1,
    //This variable stores temporary y axis data we update in our animation loop.
    y= y1;


//This function interacts with the canvas.
function animateLineDrawing() {
    //This variable crates trhe loop for when the game ends it resarts.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears content from last loop iteration.
    c.clearRect(0, 0, 608, 608);
    //This method starts a new path
    c.beginPath();
    //this method moves us to a starting point for our line.
    c.moveTo(x1, y1);
    //This method sets the color of your line.
    c.lineTo(x, y);
    //This method indicates the end point in our line.
    c.lineWidth = 10;
    c.strokeStyle="rgba(70, 255, 33, 0.8)";
    //This method draws everything we laid out above.
    c.stroke();
    //This condition checks if we've reached the endpoint.
    if (x1 <= x2 && y1 <= y2) {
        //This condition adds 10 to the previous end x point.
        if (x < x2) {x += 10;}
        //This condition adds 10 to the previous end y point.
        if (y < y2) { y += 10;}
        //This condition adds 10 to the previous end y point.
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
    }
    //This condition is simular to the one above.
    //It was necessary for the 6, 4, 2 win condition.
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) {x += 10;}
        if (y > y2) {y -= 10;}
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
    }
}

//This function clears our canvas after our win line is drawn.
function clear() {
    //This line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    //This line clear canvas.
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}

    disableClick() ;
    audio("./media/winGame.mp3");
    //This line stops our animation loop
    animateLineDrawing();
    //this line waiys 1 second.
    //Then, clears canvas, resets games,and allows click again.
    setTimeout(function() { clear(); resetGame(); }, 2000 );
}
//This line reset the game in a tie or a win.
function resetGame() {
//This for loop iterates through each HTMl square element.
for (let i = 0; i < 9; i++) {
    //This variable gets the html element of i.
    let square = document.getElementById(String(i));
    //This removes our elements backgroundimage.
    square.style.backgroundImage = "";
} 
//This resets our array an it empty and we can start over.
selectedSquares =[];  
}
