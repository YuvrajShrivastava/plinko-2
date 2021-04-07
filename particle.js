class Particle{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.4

        }
        this.r = r;
        this.x= x;
        this.y = y;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random (0,255),random(0,255),random(0,255))
        //this.position=this.body.position
        World.add(world,this.body)
     //   if(this.body=null){
            //	particles.display();

         
            }
    

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        //translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);

        pop();
    }
}