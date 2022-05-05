class Ball extends Body{
    constructor(x, y, r, m = 0, g = false){
        super();
        this.pos = new Vector(x, y);
        this.comp = [new Circle(x, y, r)];
        this.maxSpeed = r;
        this.m = m;
        if (this.m === 0){
            this.inv_m = 0;
        } else {
            this.inv_m = 1 / this.m;
        }
        if (g) {
            super.gravity = Math.sqrt(1/2 * Math.PI * Math.pow(this.comp[0].r, 2) / this.m);
        }
    }

    setPosition(x, y, a = this.angle){
        this.pos.set(x, y);
        this.comp[0].pos = this.pos;
    }

    reposition(){
        super.reposition();
        this.setPosition(this.pos.add(this.vel).x, this.pos.add(this.vel).y);
    }

    keyControl(){
        this.acc.x = 0
        this.acc.y = 0
        if(this.keyMap.get("W")){
            this.acc.y = -this.gravity*1.5-this.keyForce;
        }
        if(this.keyMap.get("A")){
            this.acc.x = -this.keyForce;
        }
        if(this.keyMap.get("S")){
            this.acc.y = this.keyForce;
        }
        if(this.keyMap.get("D")){
            this.acc.x = this.keyForce;
        }
        // console.log(Math.sqrt(1/2 * Math.PI * Math.pow(this.comp[0].r, 2) / this.m));
        // this.acc.y += Math.sqrt(1/2 * Math.PI * Math.pow(this.comp[0].r, 2) / this.m);
        super.keyControl();
    }
}