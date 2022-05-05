class Poly{
    constructor(x, y, r, vertexNo){
        this.color = ""
        this.vertex = [];
        for (let a = 0, i = 0; a < 2*Math.PI; a+=(2*Math.PI)/vertexNo, i++) {
            this.vertex.push(new Vector(x+Math.cos(a)*r, y+Math.sin(a)*r));
        }
        this.pos = new Vector(x, y);
        this.dir = this.vertex[0].subtr(this.pos).unit();
        this.refDir = this.dir;
        this.refDiam = [];
        for (let i = 0; i < this.vertex.length; i++) {
            this.refDiam.push(this.vertex[i].subtr(this.pos));
        }
        this.angle = 0;
        this.rotMat = new Matrix(2,2);
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.vertex[0].x, this.vertex[0].y);
        for (let i = 1; i < this.vertex.length; i++) {
            ctx.lineTo(this.vertex[i].x, this.vertex[i].y);
        }
        ctx.lineTo(this.vertex[0].x, this.vertex[0].y);
        if (!this.color){
            ctx.strokeStyle = "black";
            ctx.stroke();
        } else {
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        ctx.fillStyle = "";
        ctx.stroke();
        ctx.closePath();
    }

    getVertices(angle){
        this.rotMat.rotMx22(angle);
        this.dir = this.rotMat.multiplyVec(this.refDir);
        for (let i = 0; i < this.vertex.length; i++) {
            this.vertex[i] = this.pos.add(this.rotMat.multiplyVec(this.refDiam[i]));
        }
    }
}