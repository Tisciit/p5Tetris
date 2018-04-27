class Piece {

    constructor() {
        this.partPieces = [];
        let next = Math.floor((Math.random() * 5) + 1);

        switch (next) {
            case 1:
                //4 x 4
                this.partPieces.push(new PartPiece(0, 0));
                this.partPieces.push(new PartPiece(0, 1));
                this.partPieces.push(new PartPiece(1, 0));
                this.partPieces.push(new PartPiece(1, 1));
                break;
            case 2:
                this.partPieces.push(new PartPiece(0, 0));
                this.partPieces.push(new PartPiece(0, 1));
                this.partPieces.push(new PartPiece(0, 2));
                this.partPieces.push(new PartPiece(0, 3));
                break;
            case 3:
                this.partPieces.push(new PartPiece(0, 0));
                this.partPieces.push(new PartPiece(0, 1));
                this.partPieces.push(new PartPiece(0, 2));
                this.partPieces.push(new PartPiece(1, 1));
                break;
            case 4:
                this.partPieces.push(new PartPiece(0, 0));
                this.partPieces.push(new PartPiece(0, 1));
                this.partPieces.push(new PartPiece(0, 2));
                this.partPieces.push(new PartPiece(1, 2));
                break;
            case 5:
                this.partPieces.push(new PartPiece(0, 0));
                this.partPieces.push(new PartPiece(0, 1));
                this.partPieces.push(new PartPiece(1, 1));
                this.partPieces.push(new PartPiece(1, 2));
                break;
        }
    }

    rotate(dir) {
        //Todo: Dew it
    }

    move(rows, dir) {
        let canMove = true;

        for (let part of this.partPieces) {
            if (part.checkSideObstacle(rows, dir)) {
                canMove = false;
                return;
            }
        }

        for (let part of this.partPieces) {
            part.move(dir);
        }
    }

    movedown() {
        for (let part of this.partPieces) {
            part.movedown();
        }
    }

    draw(tileSize, padding) {
        for (let part of this.partPieces) {
            part.draw(tileSize, padding);
        }
    }

    checkObstacle(rows) {
        for (let part of this.partPieces) {
            if (part.checkObstacle(rows)) {
                return true;
            }
        }
    }

    setCellValues(rows) {
        for (let part of this.partPieces) {
            part.setCellValue(rows);
        }
    }
}


class PartPiece {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dir) {
        this.x += dir;
    }

    movedown() {
        this.y++;
    }

    draw(tileSize, padding) {
        rect(this.x * tileSize + padding, this.y * tileSize + padding, tileSize, tileSize);
    }

    checkSideObstacle(rows, dir) {
        if (this.x + dir < 0 || this.x == rows[0].tiles.length - 1) {
            return true;;
        } else if(rows[this.y].tiles[this.x + dir].value == 1) {
            return true;
        } else {
            return false;
        }
    }

    checkObstacle(rows) {
        //PartPiece is on the bottom

        if (this.y == rows.length - 1) {
            return true;
        } else if (rows[this.y + 1].tiles[this.x].value == 1) {
            return true;
        } else {
            return false;
        }
    }

    setCellValue(rows) {
        rows[this.y].tiles[this.x].value = 1;
    }


}