var joypad;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {

    if(e.keyCode == 39) {
            joypad = "right";
    }

    else if(e.keyCode == 37) {
        joypad = "left";
    }

}

function keyUpHandler(e) {

    if(e.keyCode == 39) {
        joypad = "";
    }

    else if(e.keyCode == 37) {
        joypad = "";
    }
}
