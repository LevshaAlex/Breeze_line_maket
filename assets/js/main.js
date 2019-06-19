function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
    $('.bxslider').bxSlider({
        nextText:'',
        prevText:'',
        useCSS: false,
        easing: 'jswing',
        speed: 500
    });
});