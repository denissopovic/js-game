var Game = Game || {};
    Game.soundFiles = {
        move: 'sound/sound.wav',
        blop: 'sound/blop.mp3',
        jump: 'sound/jump.mp3'
    };
    Game.lives = 5;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var count = 180;
var xcount = 20;
var audioMove = new Audio(Game.soundFiles.blop);
var audioFail = new Audio(Game.soundFiles.move);
var numRand = Math.floor(Math.random() * 401);
var moveBall = 0;
var gameScore = 0;
var runGame = setInterval(drawGame, 10);
var restartGame = function(){
    if(joypad == "space"){
        document.location.reload();
    }
}

var catchBall = function(){
    if (moveBall < 400 ) {
        moveBall += 2;
    }
    else {
        moveBall = 0;
        numRand = Math.floor(Math.random() * 401);
        Game.lives = --Game.lives;
        audioFail.play();
    }
}

var joyStick = function(){
    switch (joypad) {
        case "left":
            count = --count -8;
            joypad = "";
            break;
        case "right":
            count = ++count +8;
            xcount = --xcount;
            joypad = "";
            break;
        case "space":
            console.log("space");
            joypad ="";
            break;
    }
}

var drawBall = function(){
    ctx.beginPath();
    ctx.fillStyle = "orange";
    if (numRand < 10) { numRand += 10};
    if (numRand > 390) { numRand += -10};
    ctx.arc(numRand, moveBall, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

var drawTheBat = function(){
    ctx.beginPath();
    ctx.fillStyle = "#ccc";
    // Make sure the bat does not go outside the canvas
    if (count < 1) { count = 0; }
    if (count > 350) { count = 350; }
    ctx.fillRect(count, 350, 50, 10);
    ctx.closePath();
};

var reDrawScreen = function(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
};

var scoreCount = function(){
    ctx.fillStyle = "yellow";
    ctx.font = "10px Arial";
    ctx.fillText("SCORE: " + gameScore ,5,15);
};

var livesCount = function(){
    ctx.fillStyle = "yellow";
    ctx.font = "10px Arial";
    ctx.fillText("LIVES: " + Game.lives ,350,15);
};

var gameOver = function(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(0, 0, 0, 0, 0);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.font = "50px Arial";
    ctx.fillText("GAME OVER!" ,40,200);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.font = "14px Arial";
    ctx.fillText("Press space to play again!" ,110,250);
    ctx.closePath();
};

function drawGame() {
    reDrawScreen();
    drawStars();
    drawTheBat();
    drawBall();
    joyStick();
    scoreCount();
    livesCount();

    if (moveBall === 350) {
        if (numRand >= count-10 && numRand <= count+60){
            moveBall = 0;
            audioMove.play();
            numRand = Math.floor(Math.random() * 401);
            gameScore += 10;
        }
    }

    if (Game.lives > 0) {
        catchBall();

    } else {
        reDrawScreen();
        drawStars();
        scoreCount();
        livesCount();
        gameOver();
        clearInterval(runGame);
        setInterval(restartGame, 10);
    }
}
