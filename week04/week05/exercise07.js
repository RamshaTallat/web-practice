function clickfunction(){
    var element1 = document.getElementById('inputBox');
    var element2 = document.getElementById('result');
    element2.firstChild.nodeValue = element1.value;
}

function myLoadFunction(){
    //var element = document.getElementById('mybutton');
    var element1 = document.getElementById('inputBox')
    element.addEventListener('keyup',clickfunction);
}




document.addEventListener('DOMContentLoaded', myLoadFunction);

