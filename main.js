const BODIES = [];
const COLLISIONS = [];

//STEP 1: setting up the environment
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

putWallsAround(0, 0, canvas.clientWidth, canvas.clientHeight);

var gamelogic = function() {
    // 
}

var update = function() {
    updatePhysics();
    gamelogic();
}

var render = function() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    BODIES.forEach((b) => {
        b.render();
    })
}

var ball = new Ball(100, 30, 10, 10);
new Polygon(20,30, 10, 8, 0)

new Userinput(ball)


const engine = new Engine(1000/30, update, render);
engine.start();