var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(100,550,50,30)
block1.shapeColour=("orange");
block2 = createSprite(200,550,50,30)
block2.shapeColour=("green");
block3 = createSprite(300,550,50,30)
block3.shapeColour=("pink");
block4 = createSprite(400,550,50,30)
block4.shapeColour=("blue");


    //create box sprite and give velocity
 ball = createSprite(50,50,30,30);   
 ball.velocityY=1;
 ball.shapeColour=("white");
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
 
    
}
