/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

	var Game = Game || {};
	    Game.soundFiles = {
	        move: 'sound/sound.wav',
	        blop: 'sound/blop.mp3',
	        jump: 'sound/jump.mp3'
	    };
	    Game.lives = 5;
	var canvas = document.getElementById("myCanvas");
	window.ctx = canvas.getContext("2d");
	var count = 180;
	var xcount = 20;
	var audioMove = new Audio(Game.soundFiles.blop);
	var audioFail = new Audio(Game.soundFiles.move);
	var numRand = Math.floor(Math.random() * 401);
	var moveBall = 0;
	var gameScore = 0;
	var runGame = setInterval(drawGame, 10);
	var restartGame = function(){
	    if(spacePressed){
	        document.location.reload();
	    }
	}

	var drawStars = __webpack_require__(1).drawStars;
	var rightPressed = false;
	var leftPressed = false;
	var spacePressed = false;
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function catchBall(){
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

	function joyStick(){
	    if(rightPressed) {
	        count = ++count +8;
	        xcount = --xcount;
	    }

	    else if(leftPressed) {
	        count = --count -8;
	    }
	}

	function drawBall(){
	    ctx.beginPath();
	    ctx.fillStyle = "orange";
	    if (numRand < 10) { numRand += 10};
	    if (numRand > 390) { numRand += -10};
	    ctx.arc(numRand, moveBall, 10, 0, 2 * Math.PI);
	    ctx.fill();
	    ctx.closePath();
	}

	function drawTheBat(){
	    ctx.beginPath();
	    ctx.fillStyle = "#ccc";
	    // Make sure the bat does not go outside the canvas
	    if (count < 1) { count = 0; }
	    if (count > 350) { count = 350; }
	    ctx.fillRect(count, 350, 50, 10);
	    ctx.closePath();
	};

	function reDrawScreen(){
	    ctx.fillStyle = "black";
	    ctx.fillRect(0, 0, 500, 500);
	};

	function scoreCount(){
	    ctx.fillStyle = "yellow";
	    ctx.font = "10px Arial";
	    ctx.fillText("SCORE: " + gameScore ,5,15);
	};

	function livesCount(){
	    ctx.fillStyle = "yellow";
	    ctx.font = "10px Arial";
	    ctx.fillText("LIVES: " + Game.lives ,350,15);
	};

	function gameOver(){
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

	function keyDownHandler(e) {
	    if(e.keyCode == 39) {
	        rightPressed = true;
	    }

	    else if(e.keyCode == 37) {
	        leftPressed = true;
	    }

	    else if(e.keyCode == 32) {
	        spacePressed = true;
	    }
	}

	function keyUpHandler(e) {
	    if(e.keyCode == 39) {
	        rightPressed = false;
	    }

	    else if(e.keyCode == 37) {
	        leftPressed = false;
	    }

	    else if(e.keyCode == 32) {
	        spacePressed = false;
	    }
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	 var starField = [];


	    var createStars = function(){
	        for (var i = 0; i < 150; i++){
	            starField.push(
	                {
	                    x:Math.round(Math.random() * 401),
	                    y:Math.round(Math.random() * 401),
	                    vy: Math.ceil(Math.random() * 3)});
	                }
	        }


	    createStars();

	    var drawStars = function (){
	        var star;
	        for (var i = 0; i < 150; i++){
	            star = starField[i];
	            star.y = (star.y + star.vy + 400) % 400;
	            switch(star.vy) {
	                case 1:
	                    ctx.fillStyle = "#333";
	                    break;
	                case 2:
	                    ctx.fillStyle = "#555";
	                    break;
	                default:
	                    ctx.fillStyle = "#888";
	            }
	            ctx.beginPath();
	            ctx.arc(star.x, star.y, 1, 0, Math.PI * 2, true);
	            ctx.closePath();
	            ctx.fill();
	        }
	    };

	 module.exports = {
	     starField: starField,
	     createStars: createStars,
	     drawStars: drawStars
	 };

/***/ },
/* 2 */
/***/ function(module, exports) {

	//Create the audio tag
	var soundFile = document.createElement("audio");
	soundFile.preload = "auto";

	//Load the sound file (using a source element for expandability)
	var src = document.createElement("source");
	src.src = "sound/Wacek_-_Brain_Waves_8580.mp3";
	soundFile.appendChild(src);

	//Load the audio tag
	//It auto plays as a fallback
	soundFile.load();
	soundFile.volume = 0.300000;
	soundFile.play();

	//Plays the sound
	function playMusic() {
	    //Set the current time for the audio file to the beginning
	    soundFile.currentTime = 0.01;
	    soundFile.volume = soundFile.volume;

	    //Due to a bug in Firefox, the audio needs to be played after a delay
	    setTimeout(function(){soundFile.play();},1);
	}

	playMusic();

	module.exports = {
	    soundFile: soundFile,
	    playMusic: playMusic
	};

/***/ }
/******/ ]);