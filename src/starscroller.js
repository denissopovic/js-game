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
