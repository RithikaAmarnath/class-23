class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height =h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}