var ball, player, ball1, ball2, doublePlayer;
var ballx = Math.random()*350;
var bally = Math.random()*150;


speedx = 2;
speedy = 3;
var gamestatus = "";


var playerX = 0;
var playerY = 350;

var playerScore, computerScore;

function setup(){
    canvas = createCanvas(400,400);
    canvas.parent("game");
    playerY=350;
    playerScore = 0;
    computerScore = 0;
}

function draw(){
    background(220);
    playerX = mouseX -50;
    //doublePlayer = 400 - playerX;
    rect(playerX, playerY, 100,10);

    ball = circle(ballx,bally, 20);

    moveball();
    movePlayer();
    drawBorders();
    bounceOffWalls();
    bounceOffPlayer();
    checkGoal();
    

    //fill("red");
   // text("Your Goals: "+ playerScore, 50,100);
    document.getElementById("playerscore").innerHTML = playerScore;
    //noFill();

    //fill("red");
    //text("Computer Goals: "+ computerScore, 250 ,100);
    document.getElementById("Computerscore").innerHTML = computerScore;
    //noFill();

    

    if(playerScore == 10 ){
        //document.getElementById("game").style.visibility = "hidden";
        document.getElementById("result").innerHTML = "<h1> You Win!!!! </h1>";
        ballx =0;
        bally= 0;
    }
    else if(computerScore == 10){
       //document.getElementById("game").style.visibility = "hidden";
        document.getElementById("result").innerHTML = "<h1> Computer Rules!!!</h1>";
        ballx =0;
        bally= 0;
        canvas.parent("game");
    }

}

function keyPressed(){
    if(keyCode === 32){
        console.log("keypressed");
        gamestatus = "start";
    }
    if(keyCode == ENTER && gamestatus == "start"){
        gamestatus = "stop";
    }
}

function checkGoal(){
    if(bally < 0 && (ballx >= 150 && ballx <= 250)){
        playerScore = playerScore+1;
        ballx = Math.random()*350;
        bally = Math.random()*150;
        speedy*=-1;
        console.log("you scored goal!" );
       
    }
    if(bally > 400){
        computerScore = computerScore+1;
        ballx = Math.random()*350;
        bally = Math.random()*150;
        console.log("computer scored goal!" );
        
    }
}


function moveball(){
   if(gamestatus == "start"){
       ballx = ballx-speedx;
       bally = bally-speedy;
   }
}

function movePlayer(){
    if(mouseX >= 350){
        mouseX = 350;
    }
    if(mouseX <=50){
        mouseX = 50;
    }
}

function drawBorders(){
    fill("red");
    rect(0, 0, 150, 5);
    rect(250, 0, 150, 5);
    noFill();

    fill("blue");
    rect(0, 5, 5, 350);
    rect(395, 5, 5, 350);
    noFill(); 
}

function bounceOffWalls(){
    if((ballx <= 5 || ballx >=395) && (bally<350)){
        speedx *= -1.001;
    }
    if(bally<= 5 && (ballx<= 150 || ballx>= 250)){
        speedy *=-1.001;
    }
}

function bounceOffPlayer(){
    if((ballx >= playerX && ballx <= (playerX+100)) && bally > playerY){
        speedy *=-1;
        
    }
    
}