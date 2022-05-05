class Polygon extends Body{
    constructor(x, y, r, vN, m = 0, g = false){
        super();
        this.comp = [];
        this.r = r;
        this.comp.push(new Poly(x, y, r, vN));
        this.pos = this.comp[0].pos;
        this.m = m;
        if (this.m === 0){
            this.inv_m = 0;
        } else {
            this.inv_m = 1 / this.m;
        }
        this.inertia = this.m * ((2*this.r)**2) / 12;
        if (this.m === 0){
            this.inv_inertia = 0;
        } else {
            this.inv_inertia = 1 / this.inertia;
        }
        if (g) {
        super.gravity = Math.sqrt((1/2*r**2) / this.m);
        }
    }

    keyControl(){
        if(this.keyMap.get('W')){
            this.acc = this.comp[0].dir.mult(-this.keyForce);
        }
        if(this.keyMap.get('S')){
            this.acc = this.comp[0].dir.mult(this.keyForce);
        }
        if(this.keyMap.get('A')){
            this.angVel = -this.angKeyForce;
        }
        if(this.keyMap.get('D')){
            this.angVel = this.angKeyForce;
        }
        if(!this.keyMap.get('W') && !this.keyMap.get('S')){
            this.acc.set(0, 0);
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