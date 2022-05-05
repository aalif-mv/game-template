class Box extends Body{
    constructor(x1, y1, x2, y2, w, m = 0, g = false){
        super();
        this.comp = [new Rectangle(x1, y1, x2, y2, w)];
        this.pos = this.comp[0].pos;
        this.m = m;
        if (this.m === 0){
            this.inv_m = 0;
        } else {
            this.inv_m = 1 / this.m;
        }
        this.inertia = this.m * (this.comp[0].width**2 +this.comp[0].length**2) / 12;
        if (this.m === 0){
            this.inv_inertia = 0;
        } else {
            this.inv_inertia = 1 / this.inertia;
        }
        if (g) {
        super.gravity = Math.sqrt((1/2*w*(x2-x1)) / this.m);
        }
    }

    keyControl(){
        if (this.player) {
            if(this.keyMap.get("W")){
                this.acc = this.comp[0].dir.mult(-this.keyForce*this.gravity*2);
            }
            if(this.keyMap.get("A")){
                this.angVel = -this.angKeyForce;
            }
            if(this.keyMap.get("S")){
                this.acc = this.comp[0].dir.mult(this.keyForce);
            }
            if(this.keyMap.get("D")){
                this.angVel = this.angKeyForce;
            }
        }
        super.keyControl();
    }

    setPosition(x, y, a = this.angle){
        this.pos.set(x, y);
        this.angle = a;
        this.comp[0].pos = this.pos;
        this.comp[0].getVertices(this.angle + this.angVel);
        this.angle += this.angVel;
    }

    reposition(){
        super.reposition();
        this.setPosition(this.pos.add(this.vel).x, this.pos.add(this.vel).y);
    }
}