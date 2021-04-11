class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
this.body=Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height= height;
this.image = loadImage("dustbingreen.png")
World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        imageMode(CENTER)
        fill(255,255,255,0.5);
        image(this.image,0,0,200,200)
       pop()
    }
}