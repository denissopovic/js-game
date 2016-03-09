var starFieldSlow = [];
var starFieldMiddle = [];
var starFieldFast = [];

var createStars = function(){
    for (var i = 0; i < 100; i++){
        starFieldFast.push({x:Math.round(Math.random() * 401), y:Math.round(Math.random() * 401), vy: Math.ceil(Math.random() * 10)});
        starFieldMiddle.push({x:Math.round(Math.random() * 401), y:Math.round(Math.random() * 401), vy: Math.ceil(Math.random() * 10)});
        starFieldSlow.push({x:Math.round(Math.random() * 401), y:Math.round(Math.random() * 401), vy: Math.ceil(Math.random() * 10)});
    }
}



createStars();


var drawStars = function (){
    var star;
    for (var i = 0; i < 100; i++){
        star = starFieldFast[i];
        star.y = (star.y - star.vy + 400) % 400;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        /*

        var x = starFieldFast[i].x;
        var y = starCount + starFieldFast[i].y;

        if(y == 400){
            y = 0;
            console.log('works');
        }

        ctx.beginPath();
        ctx.fillStyle = "#ddd";
        ctx.fillRect( x, y, 2, 2 );
        ctx.closePath();
        */

        /*
        var x = starFieldMiddle[i].x;
        var y = starFieldMiddle[i].y;
        ctx.beginPath();
        ctx.fillStyle = "#aaa";
        ctx.fillRect( x, (starCount * 2) + y, 1, 1 );
        ctx.closePath();

        x = starFieldSlow[i].x;
        y = starFieldSlow[i].y;
        ctx.beginPath();
        ctx.fillStyle = "#888";
        ctx.fillRect( x, starCount + y, 1, 1 );
        ctx.closePath();
        */
    }
};
