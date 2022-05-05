class Circle{
    constructor(x, y, r){
        this.color = ""
        this.vertex = [];
        this.pos = new Vector(x, y);
        this.r = r;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI);
        if (!this.color){
            ctx.strokeStyle = "black";
            ctx.stroke();
        } else {
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        ctx.fillStyle = "";
        ctx.closePath();
    }
}