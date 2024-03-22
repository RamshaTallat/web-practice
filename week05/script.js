function myclickEvent(){
    var Element = document.getElementById('circle');
    Element.style.backgroundColor = 'blue';
    Element.style.opacity = 1;
}

function myLoadFunction(){
    var Element = document.getElementById('circle');
    Element.addEventListener('click', myclickEvent);
    Element.style.opacity = 0.5;
}


document.addEventListener('DOMContentLoaded', myLoadFunction);
