<template>
    <div @click="emit('buttonClick', $event.target as HTMLElement)" class="buttons">
        <button class="button-left-bracket">(</button>
        <button class="button-right-bracket">)</button>
        <button class="button-percent">%</button>
        <button class="button-clear">CE</button>
        <button class="button-7">7</button>
        <button class="button-8">8</button>
        <button class="button-9">9</button>
        <button class="button-divide">÷</button>
        <button class="button-4">4</button>
        <button class="button-5">5</button>
        <button class="button-6">6</button>
        <button class="button-multiplication">×</button>
        <button class="button-1">1</button>
        <button class="button-2">2</button>
        <button class="button-3">3</button>
        <button class="button-minus">-</button>
        <button class="button-0">0</button>
        <button class="button-point">.</button>
        <button class="button-equal">=</button>
        <button class="button-plus">+</button>
    </div>
    <!-- <div class="buttons">
        <button v-for="btn in buttons" :key="btn.symbol" @click="btn.action">{{ btn.symbol }}</button>
    </div> -->
</template>

<script setup lang="ts">

const emit = defineEmits(['buttonClick']);

// const buttons: {symbol: string, action: void | number}[] = [
//   { symbol: "+", action: emit('add')},
//   { symbol: "-", action: emit('subtract')},
//   { symbol: "*", action: emit('multiply')},
//   { symbol: "/", action: emit('divide')},
//   {symbol: '%', action: emit('percent')},
//   {symbol: '=', action: emit('equal')},
//   {symbol: 'CE', action: emit('clear')},
//   {symbol: '0', action: emit('addNumber', 0)},
//   {symbol: '1', action: emit('addNumber', 0)},
//   {symbol: '2', action: emit('addNumber', 0)},
//   {symbol: '3', action: emit('addNumber', 0)},
//   {symbol: '4', action: emit('addNumber', 0)},
//   {symbol: '5', action: emit('addNumber', 0)},
//   {symbol: '6', action: emit('addNumber', 0)},
//   {symbol: '7', action: emit('addNumber', 0)},
//   {symbol: '8', action: emit('addNumber', 0)},
//   {symbol: '9', action: emit('addNumber', 0)},
// ];

// const calculate = (action) => {
//   result.value = action(Number(num1.value), Number(num2.value));
// };


</script>

<style scoped>
.buttons {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 40px;
    gap: 20px;
}
button[class^="button-"] {
    cursor: pointer;
    border-radius: 8px;
}
</style>