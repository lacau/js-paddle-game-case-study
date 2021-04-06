import { detectCollision } from "/src/collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.game = game;

    this.image = document.getElementById("img_brick");
    this.width = 50;
    this.height = 20;

    this.position = position;

    this.markedForDeletion = false;
  }

  update(deltaTime) {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
