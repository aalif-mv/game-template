# jsGame
jsGame is a javascript game template with a builtin physics engine.

jsGame uses HTML:5 Canvas to render.

## download the code


## How to use

You will be scripting your game in the main.js file
the file will look like this.
```javascript
const engine = new Engine(1000/30, update, render); // do not change update and render you can change frame rate 1000/30 to other rates

var gamelogic = function() {
    // where you code the logic / rules on how the game should run
}
var init = function() {
    putWallsAround(0, 0, canvas.clientWidth, canvas.clientHeight);
    var player = new Ball(100, 30, 10, 10);

    new Userinput(player); // add user input to player
    engine.start(); // start the loop
}

document.body.onload = init;
```