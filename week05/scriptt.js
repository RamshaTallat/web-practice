function myclickEvent(){
    var Element = document.getElementById('circle');
    var circleopacity = parseFloat(Element.style.opacity);
    Element.style.opacity = circleopacity - 0.1;
}

function myLoadFunction(){
    var Element = document.getElementById('circle');
    Element.addEventListener('click', myclickEvent);
    Element.style.opacity = 0.5;
}


document.addEventListener('DOMContentLoaded', myLoadFunction);
