// return to top button element
var button = document.createElement("button");
button.innerHTML = "Return to Top";


document.body.appendChild(button);


button.style.display = "none"; 


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}


window.addEventListener("scroll", function() {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});


button.addEventListener("click", scrollToTop);
