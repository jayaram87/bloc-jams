var animatePoints = function() {
    var points = document.getElementsByClassName('point');
 
    var revealPoint = function() {
        for (var index = 0; index < points.length; index++) {
            points[index].style.opacity = 1;
            points[index].style.transform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
            points[index].style.transformDuration = "4s";
            points[index].style.msTransformDuration = "4s";
            points[index].style.WebkitTransformDuration = "4s";
        }
    };
 
    revealPoint();
};
