putWallsAround(0, 0, canvas.clientWidth, canvas.clientHeight);

var gamelogic = function() {
    // 
}
var init = function() {
    var ball = new Ball(100, 30, 10, 10);
    new Polygon(20,30, 10, 8, 0)

    new Userinput(ball)
    const engine = new Engine(1000/30, update, render);
    engine.start();
}

document.onload = init;