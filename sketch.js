const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,300,400,20)

    block1 = new Block(470,275,40,40);
    block2 = new Block(430,275,40,40);
    block3 = new Block(390,275,40,40);
    block4 = new Block(510,275,40,40);
    block5 = new Block(450,235,40,40);
    block6 = new Block(490,235,40,40);
    block7 = new Block(410,235,40,40);
    block8 = new Block(420,195,40,40);
    block9 = new Block(460,195,40,40);
    block10 = new Block(440,155,40,40);
    polygon = new Polygon(100,200,60,60);
}  

function draw() {
    background("powderblue"); 
   
    Engine.update(engine);

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    polygon.display();
}
