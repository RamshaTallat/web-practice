function myKeyDown(event) {
    if (event.keyCode === 37) {
        var element = document.getElementById('circle');
        var positionLeft = element.offsetLeft;
        console.top(positionLeft);
        element.style.left = parseInt(positionTop) - 10 + 'px';
        console.log(element.style.left);
    }
}

function myLoadFunction() {
    document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
