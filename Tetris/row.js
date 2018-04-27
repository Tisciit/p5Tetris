class Row {

    /**
     * @param {Row} Row The object to copy
     * @param {number} numberOfTiles The number of tiles contained within this row
     * @param {number} y The y location of this row
     */
    constructor(numberOfTiles, y) {

        this.tiles = [];
        for (let x = 0; x < numberOfTiles; x++) {
            this.tiles.push(new Tile(x, y));
        }
        this.isFilled = false;
    }

    checkFilled() {
        let filled = true;
        for (let tile of this.tiles) {
            if (tile.value == 0) {
                filled = false;
            }
        }
        this.isFilled = filled;
        return this.isFilled;
    }

    draw(tileSize, paddingLeft) {
        for (let tile of this.tiles) {
            tile.draw(tileSize, paddingLeft);
        }
    }

    moveDown() {
        for (let tile of this.tiles) {
            tile.y++;
        }
    }
}