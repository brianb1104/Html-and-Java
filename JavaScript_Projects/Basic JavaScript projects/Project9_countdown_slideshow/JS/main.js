function countdown() {
    var seconds = document.getElementById("seconds").nodeValue;

    function tick() {
        seconds = seconds - 1;
        timer.innerHtml = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}