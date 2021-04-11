class Paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.5,
            density:1.2,
            friction:0.5
        }
this.body = Bodies.circle(250,540,20,options)
this.width=50
this.image = loadImage("crumpledpaper.png");
World.add(world,this.body)
    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    ellipseMode(RADIUS)
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius,this.radius)
}
}
