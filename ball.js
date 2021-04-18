class ball {
    constructor(x,y,r){
        var b_option={
    
            
            friction:0.5,
            density:1.2
        
          }
    
        this.body=Bodies.circle(x,y,r,b_option)
        World.add(myworld,this.body);
    
    }
      display()
      {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10)
    
      }
    
    
    }