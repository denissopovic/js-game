    var Game = Game || {};
    Game.soundTypes = { BACKGROUND: 0, COLLISION: 1, SHOOT: 2 };
    Game.soundFiles = {
        move: 'sound/sound.wav',
        blop: 'sound/blop.mp3',
        jump: 'sound/jump.mp3'
    };
	var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");    
    var count = 10;
    var xcount = 20;
    var audioMove = new Audio(Game.soundFiles.blop);
    var audioFail = new Audio(Game.soundFiles.move);
    var numRand = Math.floor(Math.random() * 401);
    var moveBall = 0;
    var gameScore = 0;
    var div = document.getElementById('score');
    var div2 = document.getElementById('lives');
    var hett = document.getElementById('gameover');
    Game.lives = 5;
    var starCount = 0;

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
                gameScore = gameScore + 10;
            }
        }

        function catchBall(){
            if (moveBall < 400 ) {
                moveBall = ++moveBall+1;
            }
            else {
                moveBall = 0;
                numRand = Math.floor(Math.random() * 401);
                Game.lives = --Game.lives;
                audioFail.play();
            }
        }

        if (Game.lives > 0) {
            catchBall();

        } else {
            gameOver();
        }
    }

    setInterval(drawGame, 10);

    function joyStick(){
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
        }
    }

    function drawBall(){
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(numRand, moveBall, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    // Making a function expression with anonymous function
    var drawTheBat = function (){
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
        ctx.fillStyle = "yellow";
        ctx.font = "50px Arial";
        ctx.fillText("GAME OVER!" ,40,200);
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(numRand, moveBall, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };