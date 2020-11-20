class Player {
    constructor(ctx, x, y) {
        // save the context for the draw function
        this.ctx = ctx;

        // position
        this.x = x;
        this.y = y;

        this.speed = 1;
        this.direction = {
            x: 0,
            y: 1
        }
        this.width = 50;
        this.height = 50;
    }

    // update the perso for each frame
    update(platforms) {
        // save the actual position
        const oldX = this.x;
        const oldY = this.y;

        // update the position with the direction * speed
        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;

        // for each platform we check if there is a colision with the player
        platforms.forEach(platform => {
            // if there is a colision with keep the previous position
            // and we dont check the other platform by exit the function with return
            if (this.colide(platform)) {
                this.x = oldX;
                this.y = oldY;
                return;
            }
        });
    }

    // return true if the platform colide with the player
    colide(platform) {
        if (this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.height + this.y > platform.y) {
            return true;
        }

        return false;
    }

    // set the direction to the left
    moveLeft() {
        this.direction.x = -1;
        this.direction.y = 0;
    }

    // set the direction to the right
    moveRight() {
        this.direction.x = 1;
        this.direction.y = 0;
    }

    // set the direction to the top
    moveUp() {
        this.direction.x = 0;
        this.direction.y = -1;
    }

    // set the direction to the down
    moveDown() {
        this.direction.x = 0;
        this.direction.y = 1;
    }

    // increase the player's speed
    increaseSpeed() {
        this.speed += 1;
    }

    // draw the player with a rect for each frame
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}