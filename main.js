const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const perso = new Perso(ctx, 400, 400);
const platforms = []

platforms.push(new Platform(ctx, 200, 500, 400, 10))
platforms.push(new Platform(ctx, 200, 300, 10, 400))

perso.draw();

document.onkeydown = keyPress;

function keyPress(e) {
    console.log(e.key);
    switch (e.key) {
        case "ArrowLeft":
            perso.moveLeft();
            break;
        case "ArrowRight":
            perso.moveRight();
            break;
        case "ArrowUp":
            perso.moveUp();
            break;
        case "ArrowDown":
            perso.moveDown();
            break;
        case " ":
            perso.speed += 1;
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, 800, 800);
    perso.draw();
    platforms.forEach(function name(platform) {
        platform.draw();
    })
}

function update() {
    perso.update(platforms);
}

setInterval(draw, 1000 / 60);
setInterval(update, 1000 / 60);