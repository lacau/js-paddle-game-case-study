import { detectCollision } from "/src/collisionDetection";

export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.image = document.getElementById("img_ball");
    this.size = 16;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 200 };
    this.speed = { x: 4, y: -2 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall left or right
    if (this.position.x < 0 || this.position.x >= this.gameWidth - this.size)
      this.speed.x = -this.speed.x;
    // wall top
    if (this.position.y < 0) this.speed.y = -this.speed.y;

    // bottom of game
    if (this.position.y + this.size >= this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    // check collision with paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
    }
  }
}
