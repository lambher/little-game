// get the canvas element
const canvas = document.getElementById("canvas");
// get the 2d context
const ctx = canvas.getContext("2d");

// player
const player = new Player(ctx, 400, 400);

// array of platform
const platforms = []
platforms.push(new Platform(ctx, 200, 500, 400, 10))
platforms.push(new Platform(ctx, 200, 300, 10, 400))

// catch key event
document.onkeydown = function (e) {
    console.log(e.key);
    // check the type of key
    switch (e.key) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
        case "ArrowUp":
            player.moveUp();
            break;
        case "ArrowDown":
            player.moveDown();
            break;
        case " ":
            player.increaseSpeed();
            break;
    }
}

// update and draw 60x / sec
setInterval(function () {
    player.update(platforms);
    // clear all the canvas
    ctx.clearRect(0, 0, 800, 800);

    // draw the player
    player.draw();

    // draw each platform
    platforms.forEach(function name(platform) {
        platform.draw();
    })
}, 1000 / 60);
