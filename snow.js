class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 8;
 
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("snow4.png");
       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        noStroke();
        fill("white");

        image.scale=0.2;
        imageMode(CENTER);
        image(this.image, 0, 0, 50 ,50);
       
        pop();
    }

};