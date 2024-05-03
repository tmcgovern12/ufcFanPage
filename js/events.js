
window.onload = function() {
    var currentYear = new Date().getFullYear();
    var copyrightText = "&copy; " + currentYear + " McGovern-UFC";
    document.getElementById("copyright").innerHTML = copyrightText;
};



// events.js


function updateCountdown() {
    
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getTime() + (5 * 24 * 60 * 60 * 1000)); // Adding 5 days in milliseconds

    
    var timeDifference = futureDate.getTime() - currentDate.getTime();

    
    if (timeDifference < 0) {
        document.getElementById('timer').textContent = "Event expired";
        return; 
    }

  
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    
    document.getElementById('timer').textContent = "Event in " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

    
    setTimeout(updateCountdown, 1000);
}


updateCountdown();









