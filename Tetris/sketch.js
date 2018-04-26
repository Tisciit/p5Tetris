//Constants
let HEIGHT = 40;
let WIDTH = 14;
let PADDING = 10;
let TILESIZE = 30;
let FRAMERATE = 4;

//Global Vars
let rows = []; //This will be an Array of Rows. Index will be Y value

let piece = new Piece();

function setup() {
  for (let y = 0; y < HEIGHT; y++) {
    rows[y] = new Row(WIDTH, y);
  }


  // put setup code here
  createCanvas(WIDTH * TILESIZE + 2 * PADDING, HEIGHT * TILESIZE + 2 * PADDING);
  frameRate(FRAMERATE);
}

function draw() {
  background(0);
  stroke(255);
  drawBoard();
  fill(0, 255, 0);
  piece.draw(TILESIZE, PADDING);

  if (piece.checkObstacle(rows)) {
    piece.setCellValues(rows);
    piece = new Piece();
    updateFilled();
  }
  piece.movedown();
}

function keyReleased(){
  frameRate(FRAMERATE);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    piece.move(-1);

  } else if (keyCode == RIGHT_ARROW) {
    piece.move(1);
  } else if(key == " "){
    frameRate(40);
  }
  piece.draw(TILESIZE,PADDING);
}

function updateFilled() {
  for (let rowIndex = rows.length - 1; rowIndex >= 0; rowIndex--) {
    if (rows[rowIndex].checkFilled()) {
      for (let y2 = rowIndex - 1; y2 >= 0; y2--) {
        for (let x = 0; x < WIDTH; x++) {
          rows[y2].tiles[x].y++;
        }
      }
      rows.splice(rowIndex);

      rows.unshift(new Row(WIDTH, 0));
      rowIndex++;
    }
  }
}

function drawBoard() {
  for (let row of rows) {
    row.draw(TILESIZE, PADDING);
  }
}