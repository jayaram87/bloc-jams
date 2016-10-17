var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(callbackReturn) {
    callbackReturn.style.opacity = 1;
    callbackReturn.style.transform = "scaleX(1) translateY(0)";
    callbackReturn.style.msTransform = "scaleX(1) translateY(0)";
    callbackReturn.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
    forEach(points, revealPoint); 
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    
    if(window.innerHeight > 950){
        animatePoints(pointsArray);
    }
    
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function(event) {
        if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
             animatePoints(pointsArray);
        }
    });
}