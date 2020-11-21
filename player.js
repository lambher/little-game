class Player {
    constructor(ctx, x, y) {
        // save the context for the draw function
        this.ctx = ctx;

        // position
        this.x = x;
        this.y = y;

        this.speed = 2;
        this.direction = {
            x: 0,
            y: 1
        }
        this.width = 50;
        this.height = 50;
        this.loadSprites();
    }

    loadSprites() {
        this.sprite = new Sprite(ctx, [
            "./assets/player/walk/Walk1.png",
            "./assets/player/walk/Walk2.png",
            "./assets/player/walk/Walk3.png",
            "./assets/player/walk/Walk4.png",
            "./assets/player/walk/Walk5.png",
            "./assets/player/walk/Walk6.png",
            "./assets/player/walk/Walk7.png",
            "./assets/player/walk/Walk8.png",
            "./assets/player/walk/Walk9.png",
            "./assets/player/walk/Walk10.png",
            "./assets/player/walk/Walk11.png",
            "./assets/player/walk/Walk12.png",
            "./assets/player/walk/Walk13.png",
            "./assets/player/walk/Walk14.png",
            "./assets/player/walk/Walk15.png",
            "./assets/player/walk/Walk16.png",
            "./assets/player/walk/Walk17.png",
            "./assets/player/walk/Walk18.png",
            "./assets/player/walk/Walk19.png",
            "./assets/player/walk/Walk20.png",
        ], 50, 50);

    }

    // update the perso for each frame
    update(platforms) {
        this.sprite.update();


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
        this.sprite.startAnimation();
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
        this.sprite.stopAnimation();
        this.direction.x = 0;
        this.direction.y = 1;
    }

    // increase the player's speed
    increaseSpeed() {
        this.speed += 1;
    }

    // draw the player with a rect for each frame
    draw() {
        this.sprite.draw(this.x, this.y);
        //        ctx.fillStyle = 'green';
        //        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}