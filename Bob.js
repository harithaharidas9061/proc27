class Bob{
    constructor(x,y,r){
        var options=
        {
         isStatic:false,
         density:3,
         restituion:1.2,
         friction:0.4,
        }
        
        this.y=y;
        this.x=x;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
   
      display(){
          var pos=this.body.position
          push();
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          ellipseMode(CENTER);
         fill("pink");
         ellipse(0,0,this.r,this.r);
         pop();
          
          
      }
   
   }