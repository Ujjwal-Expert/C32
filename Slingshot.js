class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    reload(body){
        this.sling.bodyA = body;
        Matter.Body.setPosition( this.sling.bodyA ,{x: 200 , y:50 });
        
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);

    
        if(this.sling.bodyA){
           
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(10);
        
            if(pointA.x<220){
                stroke(48,22,8);
                line(pointA.x-25, pointA.y, 225,50);
                line(pointA.x-25,pointA.y,180,50);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(10);
                stroke(48,22,8);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
        
    }
    
}