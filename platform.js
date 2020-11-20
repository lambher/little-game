class Platform {
    constructor(ctx, x, y, width, height) {
        // save the context for the draw function
        this.ctx = ctx;

        // position
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // draw the platform with a rect for each frame
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}