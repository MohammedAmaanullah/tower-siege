class Polygon{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8,
            friction : 0.5,
            density : 1.0
        }
        this.polygon = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.polygon);
    }
    display(){
        var position = this.polygon.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}