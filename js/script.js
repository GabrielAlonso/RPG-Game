let x = 100;
let y = 100;

function setup() {
  createCanvas(800, 600);
  background(153);
  line(1, 1, width, height);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  rect(x, y, 50, 50);
}