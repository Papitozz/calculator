<template>
    <input type="text" class="input-num" @input="emit('inputValue', $event.target as HTMLInputElement)" :value="inputValue"/>
</template>

<script setup lang="ts">
    const emit = defineEmits(['inputValue'])
    const props = defineProps<{inputValue: string}>()
</script>

<style scoped>
.input-num {
  width: 100%;
  padding: 15px 10px;
  text-align: end;
  font-size: 20px;
  border-radius: 5px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input-num,
.input-num:hover,
.input-num:focus {
    appearance: none;
    -moz-appearance: textfield;
}
</style>