
function anteba() {
    var image = document.getElementById('lightoff');
    if (image.src.match("on")) {
        image.src = "img/off.png";
    } else {
        image.src = "img/on.png";
    }
}



