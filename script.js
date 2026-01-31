window.addEventListener('scroll', function() {
    let navbar = document.getElementById("navbar");
    let seccionInicio = document.getElementById("start");
    
    let inicioRect = seccionInicio.getBoundingClientRect();

    if (inicioRect.bottom > 0) {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
    } else {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
    }
});