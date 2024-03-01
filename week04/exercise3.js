function myLoadFunction(){
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('main-paragraph');
    p.textContent = 'Updated paragraph content on load.';
};


document.addEventListener('DOMContentLoaded', myLoadFunction);