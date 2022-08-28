var box1, box2, box3; 
class Box
{ constructor( x,y,w,h, col)
    { this.x = x 
    this.y = y 
    this.w = w 
    this.h = h 
    this.col = col } 
    show(){ fill(this.col) 
    rect(this.x, this.y, this.w , this.h) } 
    moveUp(){ this.y = this.y - random(1,3) } 
} 
function setup()
{ createCanvas(400,400) 
// create box objects 
box1 = new Box(200, 200 ,50 ,100 ,"red") 
box2 = new Box(256, 275 ,50 ,100 ,"blue")
// console.log(box2)
} 

function draw() {
    background(51) 
    box1.show() 
    box2.show()
   // box2.moveUp()
}
