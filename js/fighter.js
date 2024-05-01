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

       
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

       
        var totalHeight = document.documentElement.scrollHeight;

       
        var viewportHeight = window.innerHeight;

       
        var threshold = 20;

       
        var isNearBottom = (scrollPosition + viewportHeight + threshold) >= totalHeight;

        if (isNearBottom) {
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
