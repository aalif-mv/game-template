class Pyramid extends Body{
    constructor(x1, y1, r, m = 0, g = false){
        super();
        this.comp = [];
        this.r = r;
        let center = new Vector(x1, y1);
        let upDir = new Vector(0, -1);
        let p1 = center.add(upDir.mult(r));
        let p2 = center.add(upDir.mult(-r/2)).add(upDir.normal().mult(-r*Math.sqrt(3)/2));
        let p3 = center.add(upDir.mult(-r/2)).add(upDir.normal().mult(r*Math.sqrt(3)/2));
        this.comp.push(new Triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y));
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
            super.gravity = Math.sqrt((1/2*r*r)/this.m);
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