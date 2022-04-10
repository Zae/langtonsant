<template>
    <canvas
        ref="canvas"
        :width="windowWidth"
        :height="windowHeight"
    />
</template>

<script>
import { Ant, TYPE_DIRECTION_UP } from '../lib/ant';

const pixelSize = 10;
let grid = [];
let ctx = null;
const ant = new Ant(TYPE_DIRECTION_UP, [
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
            row.fill(false);
            return row;
        });
    },
    mounted() {
        ctx = this.$refs.canvas.getContext('2d');
        ctx.fillStyle = '#f00';

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
            if (grid[y][x]) {
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            } else {
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
    background: #00f;
}
</style>
