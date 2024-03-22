function myKeyDown(event){
    console.log(event.keycode);
    if(event.keycode == 37){
        var element = document.getElementById('inputBox');
        element.firstChild.nodevalue("Hello there!!");
    }
}

document.addEventListener('keydown', myKeyDown);