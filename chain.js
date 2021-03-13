class Chain{
constructor(bodyA,bodyB){
    var options = {
        length:10,
        stiffness:.04,bodyA:bodyA,
        bodyB:bodyB,

    }
this.chain = Constraint.create(options)
World.add(world,this.chain)

}
display(){
  var p1 = this.chain.bodyA.position;
var p2 = this.chain.bodyB.position; 
strokeWeight(4);
 line(p1.x,p1.y,p2.x,p2.y)
    
}


}