function mousePressed(){
    if(gameState==="start"){
        
        particles = new Particle(mouseX,10,10,10);
        sp = createSprite(particles.body.position.x,particles.body.position.y,10,10);
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
        particles.display();
        
    }
}