class Perso {
    constructor(ctx, x, y) {
        this.ctx = ctx;
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

    update(platforms) {
        const oldX = this.x;
        const oldY = this.y;

        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;

        platforms.forEach(platform => {
            if (this.colide(platform)) {
                this.x = oldX;
                this.y = oldY;
            }
        });
    }

    colide(platform) {
        if (this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.height + this.y > platform.y) {
            return true;
        }

        return false;
    }

    moveLeft() {
        this.direction.x = -1;
        this.direction.y = 0;
    }

    moveRight() {
        this.direction.x = 1;
        this.direction.y = 0;
    }

    moveUp() {
        this.direction.x = 0;
        this.direction.y = -1;
    }

    moveDown() {
        this.direction.x = 0;
        this.direction.y = 1;
    }

    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}