class Scripts {
    static Active = [];
    static scripts = {
        // objects
        'ball':'src/objects/ball.js',
        'box':'src/objects/box.js',
        'capsule':'src/objects/capsule.js',
        'star':'src/objects/star.js',
        'wall':'src/objects/wall.js',
        // shapes
        'circle':'src/shapes/circle.js',
        'line':'src/shapes/line.js',
        'rectangle':'src/shapes/rectangle.js',
        'triangle':'src/shapes/triangle.js',
        // physics
        'rigidbody':'src/physics/rigidbody.js',
        // math
        'colldata':'src/math/colldata.js',
        'matrix':'src/math/matrix.js',
        'vector2':'src/math/vector2.js',
        // controller
        'controller':'src/controller/controller.js',
        // 
        'main':'main.js',
    };
    static import(name) {
        let script = document.createElement('script');
        script.src = Scripts.scripts[name];
        document.head.append(script);
        Scripts.Active.push(script);
    }
    static importAll() {
        for (const scriptName in Scripts.scripts) {
            if (Object.hasOwnProperty.call(Scripts.scripts, scriptName)) {
                let script = document.createElement('script');
                script.src = Scripts.scripts[scriptName];
                document.head.append(script);
                Scripts.Active.push(script);
            }
        }
    }
}