class Controller {
    static keyMap = new Map();
    static keyDown = window.addEventListener('keydown', function(e) {
        Controller.keyMap.set(e.key.toUpperCase(), e.type === "keydown");
    });
    static keyUp = window.addEventListener('keyup', function(e) {
        Controller.keyMap.set(e.key.toUpperCase(), e.type === "keydown");
    });
}