document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    var currentYear = new Date().getFullYear();
    var copyrightText = "&copy; " + currentYear + " McGovern-UFC";
    document.getElementById("copyright").innerHTML = copyrightText;

    // Initialize countdown
    updateCountdown();

    function updateCountdown() {
        // Countdown logic here
    }
});


// events.js

var futureDate = new Date(); // Initialize futureDate
futureDate.setTime(futureDate.getTime() + (5 * 24 * 60 * 60 * 1000)); // Set futureDate to 5 days from now

function updateCountdown() {
    var currentDate = new Date();
    
    var timeDifference = futureDate.getTime() - currentDate.getTime();
    
    if (timeDifference < 0) {
        document.getElementById('timer').textContent = "Event expired";
        return; // Stop the countdown if the event has already passed
    }

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format numbers less than 10 with leading zeros
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    // Display the countdown in the specified element
    document.getElementById('timer').textContent = "Event in " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Call updateCountdown() function to start the countdown
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
});









