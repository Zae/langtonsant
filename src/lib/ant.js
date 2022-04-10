export const TYPE_DIRECTION_UP = 1;
export const TYPE_DIRECTION_RIGHT = 2;
export const TYPE_DIRECTION_DOWN = 3;
export const TYPE_DIRECTION_LEFT = 4;

export class Ant {
    direction = null;
    position = null;

    constructor(direction, startPos = [0, 0]) {
        this.direction = direction;
        this.position = startPos;
    }

    move(grid) {
        // save the current state
        const state = grid[this.position[0]][this.position[1]];

        // flip the state
        this.flipState(grid);

        this.direction = this.getNewDirection(state);
        this.position = this.getNewPos();
    }

    flipState(grid) {
        grid[this.position[0]][this.position[1]] = this.getNewState(grid);
    }

    getNewState(grid) {
        return !grid[this.position[0]][this.position[1]];
    }

    getNewDirection(state) {
        if (state) {
            // counter-clockwise 90 deg
            switch (this.direction) {
                case TYPE_DIRECTION_UP:
                    return TYPE_DIRECTION_LEFT;
                case TYPE_DIRECTION_RIGHT:
                    return TYPE_DIRECTION_UP;
                case TYPE_DIRECTION_DOWN:
                    return TYPE_DIRECTION_RIGHT;
                case TYPE_DIRECTION_LEFT:
                    return TYPE_DIRECTION_DOWN;
            }
        } else {
            // clockwise 90 deg
            switch (this.direction) {
                case TYPE_DIRECTION_UP:
                    return TYPE_DIRECTION_RIGHT;
                case TYPE_DIRECTION_RIGHT:
                    return TYPE_DIRECTION_DOWN;
                case TYPE_DIRECTION_DOWN:
                    return TYPE_DIRECTION_LEFT;
                case TYPE_DIRECTION_LEFT:
                    return TYPE_DIRECTION_UP;
            }
        }
    }

    getNewPos() {
        switch (this.direction) {
            case TYPE_DIRECTION_UP:
                return [this.position[0], this.position[1] + 1];
            case TYPE_DIRECTION_RIGHT:
                return [this.position[0] + 1, this.position[1]];
            case TYPE_DIRECTION_DOWN:
                return [this.position[0], this.position[1] - 1];
            case TYPE_DIRECTION_LEFT:
                return [this.position[0] - 1, this.position[1]];
        }
    }
}
