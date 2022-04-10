<template>
    <component :is="loaded" />
    <select v-model="loaded">
        <option value="LangtonRL">LangtonRL</option>
        <option value="LangtonRLR">LangtonRLR</option>
        <option value="LangtonLLRR">LangtonLLRR</option>
        <option value="LangtonLRRRRRLLR">LangtonLRRRRRLLR</option>
        <option value="LangtonLLRRRLRLRLLR">LangtonLLRRRLRLRLLR</option>
        <option value="LangtonRRLLLRLLLRRR">LangtonRRLLLRLLLRRR</option>
    </select>

    <div id="tooltip" title="?">
        <span>?</span>
        <div>
            <p>Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a square lattice of black and white cells.[1] The universality of Langton's ant was proven in 2000.[2] The idea has been generalized in several different ways, such as turmites which add more colors and more states.</p>
            <a href="https://en.wikipedia.org/wiki/Langton%27s_ant">Wikipedia</a>
        </div>
    </div>
</template>

<script>
import LangtonRL from './components/LangtonRL.vue';
import LangtonRLR from './components/LangtonRLR.vue';
import LangtonLLRR from './components/LangtonLLRR.vue';
import LangtonLRRRRRLLR from './components/LangtonLRRRRRLLR.vue';
import LangtonLLRRRLRLRLLR from './components/LangtonLLRRRLRLRLLR.vue';
import LangtonRRLLLRLLLRRR from './components/LangtonRRLLLRLLLRRR.vue';

export default {
    data() {
        return {
            loaded: 'LangtonRL'
        }
    },
    components: {
        LangtonRL,
        LangtonRLR,
        LangtonLLRR,
        LangtonLRRRRRLLR,
        LangtonLLRRRLRLRLLR,
        LangtonRRLLLRLLLRRR
    }
};
</script>

<style>
html, body, #app {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
}

select {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
}

#tooltip {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
}
#tooltip span {
    padding: 5px 10px;
    border-radius: 50%;
    background: #fff;
}
#tooltip span:hover + div,
#tooltip div:hover {
    display: block;
}
#tooltip div {
    display: none;
    width: 25%;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
}
</style>
