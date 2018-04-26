class Tile {

    constructor(x, y) {
        this.value = 0;
        this.x = x;
        this.y = y;
    }

    draw(tileSize, paddingLeft) {

        if (this.value == 0) {
            fill(120);
        } else {
            fill(255, 0, 0);
        }
        let pointX = this.x * tileSize + paddingLeft;
        let pointY = this.y * tileSize + paddingLeft;

        rect(pointX, pointY, tileSize, tileSize);
        //text(this.value, pointX, pointY, tileSize, tileSize);
    }

}