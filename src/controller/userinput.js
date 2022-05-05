class Userinput {
    constructor(obj, arg, callbacks) {
        window.addEventListener('keydown', function(e) {
            obj.keyMap.set(e.key.toUpperCase(), e.type === "keydown");
        });
        window.addEventListener('keyup', function(e) {
            obj.keyMap.set(e.key.toUpperCase(), e.type === "keydown");
        });
    }
}