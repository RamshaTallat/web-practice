function myInterval(){
    var Element = document.getElementById('circle');
    var circleopacity = parseFloat(Element.style.opacity);
    Element.style.opacity = circleopacity - 0.01
}

function myclickEvent(){
    setInterval(myInterval, 10);
}

function myLoadFunction(){
    var Element = document.getElementById('circle');
    Element.addEventListener('click', myclickEvent);
    Element.style.opacity = 1;
}


document.addEventListener('DOMContentLoaded', myLoadFunction);
