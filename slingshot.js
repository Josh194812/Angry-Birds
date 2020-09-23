class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA, 
            pointB:pointB,
            stiffness:0.04
            
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    display(){
        strokeWeight(3);
        if (this.sling.bodyA){
         line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
            }
        }
    fly(){
        this.sling.bodyA=null;
    }
}