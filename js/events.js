
window.onload = function() {
    var currentYear = new Date().getFullYear();
    var copyrightText = "&copy; " + currentYear + " McGovern-UFC";
    document.getElementById("copyright").innerHTML = copyrightText;
};





function calculateFutureDate() {
    
    var currentDate = new Date();

  
    var futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 5);

   
    var formattedDate = futureDate.toISOString().split('T')[0];

    return formattedDate;
}


function displayFutureDate(elementId) {
    
    var element = document.getElementById(elementId);

    
    var futureDate = calculateFutureDate();

   
    element.textContent = "Event in 5 days: " + futureDate;
}


displayFutureDate('timer');




