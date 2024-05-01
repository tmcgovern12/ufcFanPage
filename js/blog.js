window.onload = function() {
    var currentYear = new Date().getFullYear();
    var copyrightText = "&copy; " + currentYear + " McGovern-UFC";
    document.getElementById("copyright").innerHTML = copyrightText;
};


document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var button = document.getElementById("scroll-top-button");
        var scrollHeight = document.documentElement.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        
        var thresholdPercentage = 20;

        if ((scrollHeight - scrollPosition - clientHeight) / scrollHeight <= thresholdPercentage / 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    document.getElementById("scroll-top-button").onclick = function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    };
});




