class Body{
    constructor(x, y){
        this.comp = [];
        this.pos = new Vector(x, y);
        this.inv_m = 0;
        this.inertia = 0;
        this.inv_inertia = 0;
        this.elasticity = 1;

        this.friction = 0.05;
        this.gravity = 0;
        this.angFriction = 0.17;
        this.maxSpeed = 0;
        this.layer = 0;
        this.color = "";

        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.keyForce = 1;
        this.angKeyForce = 0.1;
        this.angle = 0;
        this.angVel = 0;
        this.keyMap = new Map();
        BODIES.push(this);
    }

    render(){
        if(this.color){
            this.setColor(this.color)
        }
        for (let i in this.comp){
            this.comp[i].draw();
        }
    }
    reposition(){
        this.acc = this.acc.unit().mult(this.keyForce);
        this.vel = this.vel.add(this.acc);
        this.vel = this.vel.mult(1-this.friction);
        if (this.vel.mag() > this.maxSpeed && this.maxSpeed !== 0){
            this.vel = this.vel.unit().mult(this.maxSpeed);
        }
        this.angVel *= (1-this.angFriction);
        // console.log(this.angVel);
    }
    keyControl(){
        this.acc.y += this.gravity;
    }
    setColor(color){
        this.comp.forEach(comp => {
            comp.color = color
        })
    }
    remove(){
        if (BODIES.indexOf(this) !== -1){
            BODIES.splice(BODIES.indexOf(this), 1);
        }
    }
}