<template>
    <canvas
        ref="canvas"
        :width="windowWidth"
        :height="windowHeight"
    />
</template>

<script>
import { Ant, TYPE_DIRECTION_UP } from '../lib/ant';

const STATE_1 = 0;
const STATE_2 = 1;
const STATE_3 = 2;
const STATE_4 = 3;
const STATE_5 = 4;
const STATE_6 = 5;
const STATE_7 = 6;
const STATE_8 = 7;
const STATE_9 = 8;

class LRRRRRLLRAnt extends Ant
{
    getNewState(grid) {
        return (grid[this.position[0]][this.position[1]] + 1) % 9;
    }

    getNewDirection(state) {
        switch (state) {
        case STATE_1: // L
        case STATE_7: // L
        case STATE_8: // L
            return super.getNewDirection(true);
        case STATE_2: // R
        case STATE_3: // R
        case STATE_4: // R
        case STATE_5: // R
        case STATE_6: // R
        case STATE_9: // R
            return super.getNewDirection(false);
        }
    }
}

const pixelSize = 10;
let grid = [];
let ctx = null;
const ant = new LRRRRRLLRAnt(TYPE_DIRECTION_UP, [
    Math.floor(Math.floor(window.innerHeight / pixelSize) / 2),
    Math.floor(Math.floor(window.innerWidth / pixelSize) / 2),
]);

export default {
    data() {
        return {
            windowWidth: Math.floor(window.innerWidth),
            windowHeight: Math.floor(window.innerHeight),
            width: Math.floor(window.innerWidth / pixelSize),
            height: Math.floor(window.innerHeight / pixelSize),
        };
    },
    created() {
        grid = new Array(this.height);
        grid.fill([]);

        grid = grid.map(() => {
            const row = new Array(this.width);
            row.fill(STATE_1);
            return row;
        });
    },
    mounted() {
        ctx = this.$refs.canvas.getContext('2d');

        window.requestAnimationFrame(this.loop);
    },
    methods: {
        loop() {
            const position = ant.position;
            ant.move(grid);

            this.renderCell(...position);

            window.requestAnimationFrame(this.loop);
        },
        renderCell(y, x) {
            switch(grid[y][x]) {
            case STATE_1:
                ctx.fillStyle = '#f0000';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_2:
                ctx.fillStyle = '#00ff00';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_3:
                ctx.fillStyle = '#0000ff';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_4:
                ctx.fillStyle = '#7c3b93';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_5:
                ctx.fillStyle = '#ff0088';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_6:
                ctx.fillStyle = '#ff5900';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_7:
                ctx.fillStyle = '#ffc400';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_8:
                ctx.fillStyle = '#00bbff';
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                break;
            case STATE_9:
                ctx.clearRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }
        }
    }
}
</script>

<style scoped>
canvas {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: #000;
}
</style>
