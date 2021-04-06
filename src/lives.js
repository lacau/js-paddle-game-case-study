export default class Lives {
    constructor(game) {
        this.height = game.gameHeight;
    }

    update(lives) {
        this.lives = lives;
    }

    draw(ctx) {
        ctx.font = "25px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText(this.lives, 10, this.height - 10);
    }
}