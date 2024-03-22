function myKeyDown(){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = position - 10 +'px';
}

function myLoadFunction(){
   document.addEventListener('keydown', myKeyDown)
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
