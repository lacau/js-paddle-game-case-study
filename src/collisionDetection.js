export function detectCollision(ball, gameObject) {
  // check collision with paddle
  let topOfBall = ball.position.y;
  let bottomOfBall = topOfBall + ball.size;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = topOfObject + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = leftSideOfObject + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  }

  return false;
}
