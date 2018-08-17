// Set the date we're counting down to
var countDownDate = new Date("Aug 22, 2019 15:30:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("mins").innerHTML = minutes + "m ";
    document.getElementById("secs").innerHTML = seconds + "s ";

    // If the count down is over, write some text 
    if (days == 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "I am almost there";
    }
}, 1000);

function disp() {
    document.getElementById("timer_disp").style.display = "block";
}
