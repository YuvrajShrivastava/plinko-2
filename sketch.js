var particles = [];
var plinkos = [];
var divisions= [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisionHieght=300;
var gameState = "start";
var score = 0;
var count = 0;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for (var j = 40; j <=width; j = j+50){
		plinkos.push(new Plinko(j,75));
	}
	for (var j = 15; j <=width-10; j = j+50){
		plinkos.push(new Plinko(j,175));
	}
	for (var j = -10; j <=width-20; j = j+50){
		plinkos.push(new Plinko(j,275));
	}
	for (var j = -35; j <=width-30; j = j+50){
		plinkos.push(new Plinko(j,375));
	}
	for(var k = 0; k<=width; k=k+80){
		divisions.push(new Divisions(k,450+divisionHieght/2,10,divisionHieght));


	}

	ground1 = new Ground(240,750,480,20);
	ground = createSprite(65,500,200,5);
	ground2 = createSprite(225,500,200,5);
	ground3 = createSprite(385,500,200,5);
	//ground2 = new Ground(240,500,480,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")
  text("score: "+score,width-400,50)

  if(frameCount%60===0){
	  if(gameState === "start"){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
	count = count+1
	  }
}
if(count===5){
	gameState = "end";
}
if(gameState === "end"){
	text("gameOver",width-250,200)
}
  for (var g =0; g<plinkos.length; g++){
	  plinkos[g].display();
  }
  for (var k =0; k<divisions.length;k++){
	  divisions[k].display();
  }
  for (var j =0; j<particles.length;j++){
	particles[j].display();
	sp = createSprite(particles[j].body.position.x,particles[j].body.position.y,10,10);
	if(isTouching(sp,ground)){
		score = score+500;
	}else{
		score=score+0
	}
	if(isTouching(sp,ground2)){
		score = score+100;
	}else{
		score=score+0
	}
	if(isTouching(sp,ground3)){
		score = score+500;
	}else{
		score=score+0
	}
	particles[j].display();
}


//score = score+500
ground1.display();

//mousePressed();


// ground2.display();
 //drawSprites();
 
}




function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2&&object1.y-object2.y<object2.height/2+object1.height/2&&object2.y-object1.y<object2.height/2+object1.height/2){
  return true;
    }else {
      return false;
    }
  }